
import { useEffect, useState } from 'react';
import './App.css'

function App() {
const[time, setTime] = useState(new Date());

//sets up the timer when the component loads, and cleans it when it unloads.
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date()); // runs again and again Runs a function repeatedly every N milliseconds.Example: Keep updating the clock every second.
    
  }, 1000)
  return  () => {
      clearInterval(timer); //stops it when needed (cleanup).
    };
}, []);
  
return(
<div className='clock-home'>
  <h1> Welcome </h1>
  <div className='clock'>
   {time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })}
   
  </div>
   

  </div>
  );
}
export default App;