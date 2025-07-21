
import React, { useState } from 'react';
import './App.css'


function App() {

  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colourList = ['#ffffff', '#7c1ab9ff', '#194c80ff', '#64d77dff',   '#cd8956ff','#8b949e',]

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  }
return(
  <div className='App' style={{backgroundColor}}>
    <div>
      <h1> Color Picker </h1>
    </div>
    <div className='color-picker' >
      <h3> Pick any Color : </h3>
      {colourList.map((color, index) =>
      (     
        <div className='color-blocks' 
              key={index} 
              onClick={()=>handleColorChange(color)} 
              style={{backgroundColor:color}} >           
        </div>
      ))
         }
         <div className='custom-color'>
          <input type='color' onChange={(e)=>handleColorChange(e.target.value)}/>
          </div> 
    </div>
  </div>
  );
}
export default App;