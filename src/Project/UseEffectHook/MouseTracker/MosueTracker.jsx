import React, { useEffect, useState } from 'react';
import './App.css'

function App() {

  const[mousePosition, setMousePosition] = useState( {x:0 , y:0});
  useEffect(()=>{
    console.log("useEffect called");
    // This function will be called whenever the mouse moves and it will update the mousePosition state
    // the event listener( adds the event listener once.) to track mouse movements  and update the state accordingly    
    // event.clientX: X position of the mouse (from the left of the screen)
    //event.clientY: Y position of the mouse (from the top of the screen) they are properties of the built-in MouseEvent.
    const handleMouseMove = (event) => {
      setMousePosition({x: event.clientX, y: event.clientY});
    };
    window.addEventListener('mousemove', handleMouseMove)
    // ✅ cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  },[]); //Without the [], the event listener would be added again on every render, 
      // causing performance issues or bugs (multiple listeners). 
  
return(
<div>
  <h1> Mouse Position </h1>
  <p> X : {mousePosition.x}   Y : {mousePosition.y}</p>

</div>
  );
}
export default App;