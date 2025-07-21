import React, { useState } from 'react';
import './App.css'
import { useRef } from 'react';

function App() {
    // Create a reference to the input element
const inputRef = useRef(null);

 // useState to track and display the current background color in real-time
const [bgColor, setBgColor] = useState('white');

// Focuses the input field and sets the background color 
const focusInput = () => {
  inputRef.current.focus();
   inputRef.current.style.backgroundColor = 'Red';
   setBgColor('Red');
    console.log("Input focused and background color changed");
};
 const inputFocusNext = () => {
  inputRef.current.focus();
  inputRef.current.style.backgroundColor = 'lightblue';
  setBgColor('lightBlue');
  console.log("Input focused and background color changed");
 }

 // Reset the input's background color to white
 const reset = () => {
  inputRef.current.style.backgroundColor = `white`;
  setBgColor('lightBlue');
  console.log("Input background color reset");
 }

return(
  <div className='App'>
    <input  ref={inputRef} placeholder='Focus Me'></input>
    <button onClick={focusInput}>Focus Input</button>
    <button onClick={inputFocusNext}>Focus Next Input</button>
    <button onClick={reset}>Reset Input Background</button>
     {/* Display current background color from state */}
    <h2>Input Background Color : {bgColor}</h2>
      <p>Note: The background color now updates in real-time using useState ✅</p>
      <p>useRef is used here to access the DOM element directly without causing re-renders.</p>
      <p>useState is used to reflect the current color change in the UI display.</p>
      <p>Check the browser console for debug info.</p>
  </div>
);
}
export default App;