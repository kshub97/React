import React, { useState } from 'react';
import './App.css'
import { useRef } from 'react';

function App() {
const[stateCount, setStateCount] = useState(0);

const increment = () =>{
  setStateCount(stateCount + 1);
}

const refCount = useRef(0);
const incrementRef = () =>{
  refCount.current +=1;
  console.log(`Ref Count: ${refCount.current} State Count: ${stateCount}`);
  
}

const myRef = useRef("Hello World");
console.log(myRef.current); 

return(
  <div className='App'>
    <h1> React State and Ref Example </h1>
    <h2> Ref Value : {myRef.current}</h2>
    <button onClick={() => {myRef.current = myRef.current === "Hello World"? "Hello React":"Hello World"; console.log(myRef.current);}}>
      Change Ref Value
    </button>
<h2> State Count : {stateCount}</h2>
<button onClick={increment}> Increment Count </button>
<h2>  Ref Count : {refCount.current}</h2>
<button onClick={incrementRef}> Increment Ref Count</button>
  </div>
);
}
export default App;