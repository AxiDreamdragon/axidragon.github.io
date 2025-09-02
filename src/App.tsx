import './App.scss';

import StartScreen from '@components/screens/StartScreen';
import IntroScreen from '@components/screens/IntroScreen';
import FullContentDisplayer from '@/components/FullContentDisplayer/FullContentDisplayer';

import { onDesktop } from './utility/userInfo';
import ContactScreen from './components/screens/ContactScreen';
import BackToIndexPostIt from './components/BackToIndexPostIt/BackToIndexPostIt';

import MajorProjects from './components/Project/MajorProjects/MajorProjects';
import MinorProjects from './components/Project/MinorProjects/MinorProjects';
import MinorProjectDisplayer from './components/Project/MinorProjects/MinorProjectDisplayer';

function App() {

  return (
    <div className="App">
      <BackToIndexPostIt />
      {/* On phones, content is already displayed at full size */}
      {onDesktop() && <FullContentDisplayer />}
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
