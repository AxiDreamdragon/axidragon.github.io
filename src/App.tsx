import FadingScreen from './components/FadingScreen/FadingScreen';
import blahaj from './assets/roomImages/blahaj.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{
        color: 'white',
        position: 'absolute',
        top: '33vh',
        left: '16vh',
        zIndex: 5,
        fontSize: '10vh',
        textShadow: '0 0 25px black'
      }}>hey! i'm axi
        <p style={{
          fontSize: '2vh',
        }}>
          (this website is under construction)
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p style={{
          fontSize: '5vh',
        }}>
          i'm a software engineer and i like to make things
          <br />
          i also do web development
        </p>
      </h1>
      <FadingScreen color={'black'} />
      <img className="fullImage" src={blahaj} />
    </div>
  );
}

export default App;
