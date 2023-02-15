import './App.css';
import { useState } from 'react';

function App() {

const [number, setNumber] = useState(0);
const [temperature, setTemperature] = useState('celcius');
const [display_temperature, setDisplay_temperature] = useState();

const handleSumbit = (event)=> {
  event.preventDefault();
  if (temperature === 'celcius') {
    setDisplay_temperature((9/5) * number + 32);
  } else {
    setDisplay_temperature((number - 32) * 5/9);
  }
}
  return (
    <div className="App">
      <form onSubmit={handleSumbit} className='temperature__form'>
        <input 
          type='number' 
          className='temperature__box'
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        > 
        </input>
        <select 
          className='temperature__list'
          value={temperature}
          onChange={event => setTemperature(event.target.value)}
        >
          <option value="celcius">Celcius</option>
          <option value="fahrenheit">Farenheit</option>
        </select>
        <button className='convert__button'>Convert</button>
        <section className='temperature__conversion__result'>
          <p>Result</p>
          <span>{display_temperature}° {temperature !== 'celcius' ? 'C':'F'}</span>
        </section>
      </form>
    </div>
  );
}

export default App;
