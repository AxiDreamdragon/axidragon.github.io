import './App.scss';

import StartScreen from '@components/screens/StartScreen';
import IntroScreen from '@components/screens/IntroScreen';
import FullContentDisplayer from '@/components/FullContentDisplayer/FullContentDisplayer';

import ContactScreen from './components/screens/ContactScreen';
import BackToIndexPostIt from './components/BackToIndexPostIt/BackToIndexPostIt';

import MajorProjects from './components/Project/MajorProjects/MajorProjects';
import MinorProjects from './components/Project/MinorProjects/MinorProjects';
import MinorProjectDisplayer from './components/Project/MinorProjects/MinorProjectDisplayer';

function App() {

  return (
    <div className="App">
      <BackToIndexPostIt />
      <FullContentDisplayer />
      <StartScreen />
      <IntroScreen />
      <MajorProjects />
      <MinorProjects />
      <MinorProjectDisplayer />
      <ContactScreen />
    </div >
  );
}

export default App;
