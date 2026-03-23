/* eslint-disable no-eval */
import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {

  const [number, setNumber] = useState('');

  const handle = (e) => {
    setNumber(number + e.target.value);
  };

  const Del = () => {
    setNumber(number.slice(0, -1))
  };

  const AC = () => {
    setNumber('');
  };

  const equal = () => {
    setNumber(eval(number));
  };

  const percetage = () => {
    setNumber(number/100);
  };

  return (
    <div className='bg-cal'>
      <form key={number}>
        <div className='calculator' >
          <input className='display' id='display' defaultValue={number} placeholder='00' type='textbox' />
          <div>
            <button className='yellow' onClick={AC} value={'AC'}>AC</button>
            <button className='yellow' onClick={Del} value={'Del'}>Del</button>
            <button className='yellow' onClick={percetage} value={'%'}>%</button>
            <button className='yellow' onClick={handle} value={'/'}>/</button>
          </div>
          <div>
            <button onClick={handle} value={7}>7</button>
            <button onClick={handle} value={8}>8</button>
            <button onClick={handle} value={9}>9</button>
            <button className='yellow' onClick={handle} value={'*'}>*</button>
          </div>
          <div>
            <button onClick={handle} value={4}>4</button>
            <button onClick={handle} value={5}>5</button>
            <button onClick={handle} value={6}>6</button>
            <button className='yellow' onClick={handle} value={'-'}>-</button>
          </div>
          <div>
            <button onClick={handle} value={1}>1</button>
            <button onClick={handle} value={2}>2</button>
            <button onClick={handle} value={3}>3</button>
            <button className='yellow' onClick={handle} value={'+'}>+</button>
          </div>
          <div>
            <button value={0} onClick={handle}>0</button>
            <button value={'.'} onClick={handle}>.</button>
            <button className='equal yellow' onClick={equal} value={'='}>=</button>
          </div>
        </div>
      </form>
    </div>
  )
}
