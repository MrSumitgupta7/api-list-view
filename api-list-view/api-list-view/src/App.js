import logo from"./logo.svg";
import "./App.css";
import {useState} from "react";

const api = {
  key: '3ffd0a95e1265b4c545a278b20f214eb',
  base: 'https://api.openweathermap.org/data/2.5/',

};

function App(){
  const [search,setSearch] = useState("");

  const searchPressed = () => {
   fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
       console.log(result);
  });
};

  return (
    <div className="App">
    <header className="App-header">
      <h1>Weather App</h1>

      {/**SEARCH BOX */}
      <div>
      <input 
      type='text'
      placeholder="Search"
      onChange={e => setSearch(e.target.value)}

      />

      <button onClick={searchPressed}>Search</button>
      </div>
    {/**Location */}
    <p>New York City,USA</p>
    {/**Temperature F/C */}
    <p> 32 * F </p>
    {/**Codition {SUNNY} */}
    <p>SUNNY</p>
    </header>
      </div>
  );
}
export default App;
