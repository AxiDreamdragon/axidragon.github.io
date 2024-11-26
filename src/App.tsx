import './App.css';

import { useEffect } from 'react';

import ImageSlide from '@components/ImageSlide/ImageSlide';
import StartScreen from '@components/screens/StartScreen';
import FullContentDisplayer from '@/components/FullContentDisplayer/FullContentDisplayer';

import workText from '@/assets/text/workMarker.png';

import polaroid from '@/assets/polaroid.webp';
import onDesktop from './utility/onDesktop';
import PROJECTS from './data/projects';
import IntroScreen from './components/screens/IntroScreen';

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
      <ImageSlide imageSource={polaroid}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}>
          <img src={workText} style={{ width: '100%', maxWidth: 'min(70%, 500px)' }} />
          {/* TODO: Add some index here, for easy navigating */}
        </div>
      </ImageSlide>
      {PROJECTS.map((project, _) => project.getProjectSlide())}
      {/* TODO: add contact slide. also some easy way to get to it, i suppose. */}
    </div >
  );
}

export default App;
