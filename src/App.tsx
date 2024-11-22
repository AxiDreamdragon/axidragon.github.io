import './App.css';

import { useEffect } from 'react';

import ImageSlide from '@components/ImageSlide/ImageSlide';
import ProjectSlide from '@components/ProjectSlide/ProjectSlide';
import StartScreen from '@components/screens/StartScreen';
import ProjectItem from '@/components/ProjectItem/ProjectItem';
import FullContentDisplayer from '@/components/FullContentDisplayer/FullContentDisplayer';

//TODO: Probably just make a seperate screen per project to avoid this mess
import wall from '@/assets/room/wall.png';
import blahaj from '@/assets/room/blahaj.png';
import workText from '@/assets/text/workMarker.png';
import texel1 from '@/assets/nature/texel1.png';
import longDesk from '@/assets/room/longDesk.png';
import door from '@/assets/room/door.png';

import polaroid from '@/assets/polaroid.png';
import onDesktop from './utility/onDesktop';
import PROJECTS from './data/projects';

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
      {/* TODO: Add an intro slide. Who am I, briefly? */}
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
