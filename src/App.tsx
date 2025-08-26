import './App.scss';

import { useEffect } from 'react';

import StartScreen from '@components/screens/StartScreen';
import IntroScreen from '@components/screens/IntroScreen';
import WorkIndex from '@components/screens/WorkIndex';
import FullContentDisplayer from '@/components/FullContentDisplayer/FullContentDisplayer';

import { onDesktop, onFireFox } from './utility/userInfo';
import ContactScreen from './components/screens/ContactScreen';
import BackToIndexPostIt from './components/BackToIndexPostIt/BackToIndexPostIt';
import SnippetSlide from './components/Project/ProjectSlide/SnippetSlide';

import texel1 from './assets/nature/texel1.webp';
import useProjects from './hooks/projects';
import ProjectSlide from './components/Project/ProjectSlide/ProjectSlide';

function App() {
  const { projects, loading, error } = useProjects();

  useEffect(() => {
    let throttled = false;

    const handleScroll = (event: WheelEvent) => {
      if (onFireFox()) {
        return;
      }

      event.preventDefault();

      if (throttled)
        return;

      throttled = true;

      setTimeout(() => {
        throttled = false;
      }, 500);

      const delta = event.deltaY;

      if (Math.abs(delta) < 4) {
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
      <BackToIndexPostIt />
      {/* On phones, content is already displayed at full size */}
      {onDesktop() && <FullContentDisplayer />}
      <StartScreen />
      <IntroScreen />
      <WorkIndex />
      {!loading && projects.map((project, i) =>
        <ProjectSlide key={i} {...project} />)}
      <SnippetSlide backgroundImage={texel1} />
      <ContactScreen />
    </div >
  );
}

export default App;
