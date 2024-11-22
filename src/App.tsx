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
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>Broodje Kaas is a visual novel game commissioned by the Dutch National Police Force.</p>
            <p>It teaches new caretakers what to do in case of emergencies in an interactive way.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>Artkeeper is a tool that tracks time spent focused on any application.</p>
            <p>It was created to facilitate time tracking for digital freelancers.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>SSHPlus is a Chrome Extension to facilitate finding student accomodations on sshxl.nl.</p>
            <p>Aside from advanced filters, it also remembers viewed properties
              and clarifies the likelihood that you'll be invited for an introduction night.</p>
            <p>This caught the attention of SSH themselves,
              and they're hoping to implement these features in the future.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>Exersite is a web app where visitors can vote for exercise that I should do.</p>
            <p>I initially created it to counteract that I'll mostly be sitting behind a computer all day.</p>
            <p>Admittedly, I don't look at it much anymore - I've got my own exercise routines that I maintain now.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>Exersite Manager is a JavaFX app for the Exersite web app to easily modify the exercise counts.</p>
            <p>It was mainly created for me to learn Java - modifying the counts wasn't really an issue to begin with.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>D20 Timer is a randomized productivity timer with a bite-sized task creator.</p>
            <p>I created it after seeing that random elements in games motivated me to keep playing,
              so I thought it might motivate me to keep working as well.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>Opinions not People is a web app for phones to
              reduce <a href='https://en.wikipedia.org/wiki/Out-group_homogeneity' target='blank'>out-group homogeneity bias</a>.</p>
            <p>It is currently still a work-in-progress. It should be finished by January 2025.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      <ProjectSlide
        backgroundImage={texel1}
        headerImage={workText}
      >
        <ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
          <div className='description'>
            <p>This portfolio site, is, well, a culmination of my HTML, CSS, JavaScript skills</p>
            <p>It especially thought me a lot about responsive web design.</p>
          </div>
        </ProjectItem>
        <ProjectItem imageSource={blahaj}
          gridRowSpan={3}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={door}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={wall}
          gridRowSpan={1}
          gridColumnSpan={1}
        />
        <ProjectItem imageSource={longDesk}
          gridRowSpan={1}
          gridColumnSpan={2}
        />
      </ProjectSlide >
      {/* TODO: add contact slide. also some easy way to get to it, i suppose. */}
    </div >
  );
}

export default App;
