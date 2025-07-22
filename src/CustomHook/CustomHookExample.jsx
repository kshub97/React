import React from 'react';
import './CustomHookExample.css';
import useCounter from './CustomHook/useCounter';


function CustomHook() { 
  const {count, increment, decrement, reset} = useCounter(10);
  
return(
  
  <div>
    <h1>Counter App</h1>
    <h2>Current Count: {count}</h2>
    <p>Click the buttons below to increment or decrement the count.</p>
    <br/>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
     <button onClick={reset}>Reset</button>
  </div>
);
}
export default CustomHook;