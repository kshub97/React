import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  useEffect
  // Declare a state variable 'count' and a function 'setCount' to update it, initially set to 0
  const[count,setCount] = useState(0);

  
  // useEffect runs after the component renders or when 'count' changes
  useEffect(()=>{
    document.title = "Count : " + count // Update the browser tab title whenever 'count' changes
  }, [count]);   // Dependency array: runs the effect only when 'count' changes


   // Update the state with new count
  const increment = () => {
    setCount(count + 1);
    //document.title = 'Count : '+ (count + 1); 
  };   // Note: We don't need to update document.title here manually — useEffect will handle it
 
  // JSX to render UI
return(
<div>
  <h1> Use Effect Hook Example :</h1>
  <button  onClick={increment}> Increment  </button>

</div>
  );
}
export default App;