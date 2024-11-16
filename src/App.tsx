import './App.css';

import { useEffect, useState } from 'react';

import ImageSlide from '@components/ImageSlide/ImageSlide';
import ProjectSlide from '@components/ProjectSlide/ProjectSlide';

import blahaj from '@/assets/roomImages/blahaj.png';
import wall from '@/assets/roomImages/wall.png';

import workText from '@/assets/text/workMarker.png';
import polaroid from '@/assets/polaroid.jpg';
import StartScreen from './components/screens/StartScreen';


function App() {
  const [canScroll, setCanScroll] = useState<boolean>(true);

  useEffect(() => {
    let throttled = false;

    const handleScroll = (event: WheelEvent) => {
      if (throttled || !canScroll)
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

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    }
  }, [canScroll]);

  useEffect(() => {
    const body: HTMLElement = document.querySelector('body') as HTMLElement;

    if (canScroll) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }

    const setHandleScroll = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCanScroll(customEvent.detail.canScroll);
    }

    window.addEventListener('setHandleScroll', setHandleScroll);

    return () => {
      window.removeEventListener('setHandleScroll', setHandleScroll);
    }
  }, [canScroll]);

  return (
    <div className="App">
      <StartScreen />
      <ImageSlide imageSource={polaroid}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
          <img src={workText} style={{ width: '100%', maxWidth: 'min(70%, 500px)' }} />
        </div>
      </ImageSlide>
      <ProjectSlide
        backgroundImage={wall}
        headerImage={workText}
        description={'Broodje Kaas'}>
        {/* TODO: turn this into another component */}
        <div className='image-wrapper' style={{ gridRow: 2, gridColumn: '1 / 3' }} >
          <img src={wall} className='project-image' height={'100%'} />
        </div>
      </ProjectSlide >
      <p>Broodje Kaas</p>
      <p>Artkeeper</p>
      <p>SSHPlus</p>
      <p>Exersite</p>
      <p>Exersite Manager</p>
      <p>D20 Timer</p>
      <p>People not Opinions</p>
    </div >
  );
}

export default App;
