import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    // let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`).then(res => res.json())
    let result = await fetch('/api').then(res => res.json())
    setWeather(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={getWeather}> Show weather info</button>
        {weather && <>
          <h1>{weather.name}</h1>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
        </>}
      </header>
    </div>
  );
}

export default App;
