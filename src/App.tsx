import './App.css';

import { useEffect, useState } from 'react';

import ImageSlide from '@components/ImageSlide/ImageSlide';
import ProjectSlide from '@components/ProjectSlide/ProjectSlide';
import StartScreen from '@components/screens/StartScreen';
import ProjectImage, { FillType } from '@components/ProjectImage/ProjectImage';

//TODO: Probably just make a seperate screen per project to avoid this mess
import wall from '@/assets/room/wall.png';
import blahaj from '@/assets/room/blahaj.png';
import workText from '@/assets/text/workMarker.png';
import texel1 from '@/assets/nature/texel1.png';
import longDesk from '@/assets/room/longDesk.png';
import door from '@/assets/room/door.png';

import polaroid from '@/assets/polaroid.png';

function App() {
  const [title, setTitle] = useState("AXI-DREAMDRAGON-");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(title => {
        const lastChar = title.charAt(0);
        const newTitle = title.substring(1) + lastChar;
        return newTitle;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [title]);

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
        description={
          ['Broodje Kaas is not just a game, it is THE game.',
            'Like, this is crazy, you can play as a sandwich, and you can play as a sandwich with a gun.',
            "That's not true, I don't know why CoPilot said that. But also, I'm making this very long just to see if this will properly wrap around and stuff like that."
          ]
        }>
        <ProjectImage imageSource={door}
          gridRow={2}
          gridColumn={1}
          fillType={FillType.HEIGHT} />
        <ProjectImage imageSource={blahaj}
          gridRow={'1 / 4'}
          gridColumn={3}
          fillType={FillType.HEIGHT} />
        <ProjectImage imageSource={wall}
          gridRow={2}
          gridColumn={2}
          fillType={FillType.HEIGHT} />
        <ProjectImage imageSource={longDesk}
          gridRow={3}
          gridColumn={'1 / 3'}
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
