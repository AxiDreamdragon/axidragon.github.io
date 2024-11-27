import './App.css';

import { useEffect } from 'react';

import StartScreen from '@components/screens/StartScreen';
import IntroScreen from '@components/screens/IntroScreen';
import WorkIndex from '@components/screens/WorkIndex';
import FullContentDisplayer from '@/components/FullContentDisplayer/FullContentDisplayer';

import onDesktop from './utility/onDesktop';
import PROJECTS from './data/projects';
import ContactScreen from './components/screens/ContactScreen';

function App() {
  useEffect(() => {
    let throttled = false;

    const handleScroll = (event: WheelEvent) => {
      
      event.preventDefault();
      if (throttled)
        return;

      throttled = true;

      setTimeout(() => {
        throttled = false;
      }, 500);

      const delta = event.deltaY;

      if (Math.abs(delta) < 4) {
        //for scrolling with a touchpad
        //but also screw touchpads
        return;
      }

      const screenHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      let closestScreen = Math.round(currentScroll / screenHeight) * screenHeight;

      if (delta > 0) {
        window.scrollTo({
          top: closestScreen + screenHeight,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: closestScreen - screenHeight,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    }
  }, []);

  return (
    <div className="App">
      {/* On phones, content is already displayed at full size */}
      {onDesktop() && <FullContentDisplayer />}
      <StartScreen />
      <IntroScreen />
      <WorkIndex />
      {PROJECTS.map((project, _) => project.getProjectSlide())}
      <ContactScreen />
    </div >
  );
}

export default App;
