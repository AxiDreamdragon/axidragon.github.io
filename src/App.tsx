import './App.css';

import { useEffect, useState } from 'react';

import FadingScreen from '@components/FadingScreen/FadingScreen';
import ImageSlide from '@components/ImageSlide/ImageSlide';
import PolaroidDivider from '@components/PolaroidDivider/PolaroidDivider';

import blahaj from '@/assets/roomImages/blahaj.jpg';
import door2 from '@/assets/roomImages/door2.jpg';
import workText from '@/assets/text/workMarker.png';
import polaroid from '@/assets/polaroid.jpg';

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
      <FadingScreen color={'black'} />
      <ImageSlide imageSource={blahaj}>
        {/* TODO: Make this styling dependent on device */}
        <h1 style={{
          fontSize: '5vw',
          textShadow: '0 0 25px black',
          position: 'absolute',
          top: 'calc(55vh - 2.5vw)',
          left: '18vw',
          zIndex: 3,
          textDecoration: 'underline',
          textUnderlineOffset: '1vh',
        }}>Hey! I'm Axi
        </h1>
        <p style={{
          fontSize: '1vw',
          gridColumn: '1',
          gridRow: '1',
          alignSelf: 'start',
          justifySelf: 'start',
        }}>
          (this website is under construction)
          <br />
          (yes, I am aware that the styling is bad)
        </p>
        <p style={{
          fontSize: '25px',
          gridColumn: '1 / 3',
          gridRow: '3 / 6',
          textShadow: '0 0 15px black',
        }}>
          I'm a software engineer and
          <br />
          I like to make things
          <br />
          I also do web development!
        </p>
      </ImageSlide>
      <ImageSlide imageSource={polaroid}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
          <img src={workText} style={{ width: '100%', maxWidth: 500 }} />
        </div>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>Broodje Kaas</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>Artkeeper</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>SSHPlus</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>Exersite</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>Exersite Manager</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>D20 Timer</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>People not Opinions</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>City Generator</p>
        </PolaroidDivider>
      </ImageSlide>
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} className='polaroid-header' />
          <p>Super Bean Isle</p>
        </PolaroidDivider>
      </ImageSlide>
    </div >
  );
}

export default App;
