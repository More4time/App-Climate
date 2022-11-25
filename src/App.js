import './assets/css/App.css';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <WeatherPanel></WeatherPanel>

    </div>
  );
}

export default App;
