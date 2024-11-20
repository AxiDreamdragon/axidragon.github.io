import './App.css';

import { useEffect, useState } from 'react';

import ImageSlide from '@components/ImageSlide/ImageSlide';
import ProjectSlide from '@components/ProjectSlide/ProjectSlide';
import StartScreen from '@components/screens/StartScreen';
import ProjectItem, { FillType } from '@/components/ProjectItem/ProjectItem';

//TODO: Probably just make a seperate screen per project to avoid this mess
import wall from '@/assets/room/wall.png';
import blahaj from '@/assets/room/blahaj.png';
import workText from '@/assets/text/workMarker.png';
import texel1 from '@/assets/nature/texel1.png';
import longDesk from '@/assets/room/longDesk.png';
import door from '@/assets/room/door.png';

import polaroid from '@/assets/polaroid.png';

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
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} fillType={FillType.WIDTH} disableRotation>
          <div className='description'>
            <p>Broodje Kaas is not just a </p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
          fillType={FillType.HEIGHT} />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
          fillType={FillType.HEIGHT} />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
          fillType={FillType.HEIGHT} />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
          fillType={FillType.HEIGHT} />
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
