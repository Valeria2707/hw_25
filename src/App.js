import './App.css';
import { useState } from 'react';
import {btn, btnOperation} from './buttonData';

function App() {
  let [value, setValue] = useState('');
  let [result, setResult] = useState(0);
  let [operations, setOperations] = useState('+');
  let [showResult, setShowResult] = useState(false);
  let newRes = result;

  const showValue = (event) =>{
    const number = event.target.innerHTML
    const bigNumber = value.concat(number);
    console.log(bigNumber)
    setValue(bigNumber);
  }

   const clickOperations = (event) =>{
    setShowResult(false);
    const operation = event.target.innerHTML
    console.log(operation);
    setOperations(operation)
    const values = Number(value);
    setResult(values)
    setValue('');
  }

  const showRes = () =>{
    setShowResult(true)
    const values = Number(value);
    if(operations === '+')
    {
      newRes += values
      setResult( newRes)
    }
    else if(operations === '-')
    {
      newRes -= values
      setResult( newRes)
    }
    else if(operations === 'x')
    {
      newRes *= values
      setResult( newRes)
    }
    else if(operations === '/')
    {
      newRes /= values
      setResult( newRes)
    }
    else if(operations === '%')
    {
      setResult(newRes /= 100)
    }
    else if(operations === 'x^n')
    {
      newRes = Math.pow(newRes, values)
      setResult( newRes)
    }
    else if(operations === '√')
    {
      newRes = Math.sqrt(newRes)
      setResult( newRes)
    }
    else if(operations === 'С'){
      setShowResult(false);
      setResult( newRes = '')
    }
    setValue(String(newRes));
  }

  return (
    <div className="App">
      <div className='container'>
      <div className='text'>{showResult ? result : value}</div>
      <div className='keypad'>
        {btnOperation.map(button =>{
           return <button key={button.id} onClick={clickOperations}  className='option'>{button.value}</button>
        })}
        {btn.map(button =>{
           return <button key={button.id} onClick={showValue}>{button.value}</button>
        })}
        <button className='res option' onClick={showRes}>=</button>
      </div>
      </div>
    </div>
  );
}

export default App;
