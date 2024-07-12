
import './App.css';
import Header from './components/Header';
import { CityProvider } from './context/CityContext';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather Forecast - Turkey </h2>
        <CityProvider>
          <Header />
          <Body />
        </CityProvider>
      </header>
    </div>
  );
}

export default App;
