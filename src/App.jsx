
import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome.jsx';
import Greetings from './components/Greetings.jsx';
import BMI from './components/BMI.jsx';

function App() {
  const [isToggled, setToggled] = useState(true);
  const [counterState, setCounterState] = useState(0);
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const toggleTrueFalse =()=> setToggled(!isToggled);
  const incrementCounter = ()=> setCounterState(counterState + 1);
  const decrementCounter = () => setCounterState(counterState-1);



  return (
   <div className='App'>
      <Welcome name="phillip"></Welcome>
      <h3>Button Examples</h3>
      <button className='App-button' onClick={()=> toggleTrueFalse()}>{isToggled.toString()}</button>
      <button className='App-button' onClick={()=> incrementCounter()}>+</button>
      <p>{counterState}</p>
      <button className='App-button' onClick={()=> decrementCounter()}>-</button>
      <label>Name: </label>
      <input  type='text' value={inputText} onChange={(e)=> {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value])}}/>
        <p>{inputText}</p>
        <ul>
          {historyList.map((rec)=> {return<div>{rec}</div>})}
        </ul>
        <Greetings/>
        <div>

        <BMI/>
        </div>

   </div>
  );
}

export default App;
