import { useState } from 'react';
import './App.css'
function App(){
  //declare useState hook
  const [count,setCount]=useState(0);
//using multiple state ,passing default value 1
const [step,setStep]=useState(1)

  const incrementCount=()=>{
    setCount(count+step);
     console.log("After update:", count); 
    // setCount(count+1);
  }
  const decrementCount=()=>{
    setCount(count-step);
     console.log("After update:", count); 
    // setCount(count-1);
  }


  return(
      <div className='app-container'>
        <h1>Counter Value : {count}</h1>
        {/* type is number acccpet from user how much increemnt ,value bind with variable which is step */}
        <input type='number' value={step} onChange={(event)=>
          setStep(parseInt(event.target.value))
        }/>
        <button onClick={incrementCount}>Increment Counter</button>
        <button onClick={decrementCount}>Decrement Counter</button>
        
      </div>

  );
}
export default App