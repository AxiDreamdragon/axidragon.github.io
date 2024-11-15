import FadingScreen from '@components/FadingScreen/FadingScreen';
import blahaj from '@/assets/roomImages/blahaj.jpg';
import door2 from '@/assets/roomImages/door2.jpg';
import workText from '@/assets/text/workMarker.png';
import './App.css';
import ImageSlide from '@components/ImageSlide/ImageSlide';
import PolaroidDivider from '@components/PolaroidDivider/PolaroidDivider';
import ProjectSlider from '@components/ProjectSlider/ProjectSlider';

function App() {
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
      <ImageSlide imageSource={door2}>
        <PolaroidDivider>
          <img src={workText} style={{ width: '50%', maxWidth: 150, }} />
        </PolaroidDivider>
        <ProjectSlider />
      </ImageSlide>
    </div >
  );
}

export default App;
