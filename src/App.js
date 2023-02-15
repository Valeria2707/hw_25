import './App.css';
import { useState } from 'react';
import {btn, btnOperation} from './buttonData';

function App() {
  let [value, setValue] = useState('');
  let [result, setResult] = useState(0);
  let [operations, setOperations] = useState('+');
  let [showResult, setShowResult] = useState(false);

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
    setValue('');
    const values = Number(value);
    setResult(values)
  }

  const showRes = () =>{
    setShowResult(true)
    const values = Number(value);
    if(operations === '+')
    {
      setResult(result += values)
      console.log(result)
    }
    else if(operations === '-')
    {
      setResult(result -= values)
      console.log(result)
    }
    else if(operations === 'x')
    {
      setResult(result *= values)
      console.log(result)
    }
    else if(operations === '/')
    {
      setResult(result /= values)
      console.log(result)
    }
    else if(operations === '%')
    {
      setResult(result /= 100)
      console.log(result)
    }
    else if(operations === '√')
    {
      setResult(Math.sqrt(result))
      console.log(result)
    }
    else if(operations === 'С'){
      setShowResult(false);
      result = ''
      console.log(result)
    }

    setValue(String(result));
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
