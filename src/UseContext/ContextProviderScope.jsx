
import { createContext, useContext, useState } from 'react';
import './App.css'

 const themeContext = createContext('contrast');
function App() { 
  // State to hold the current theme (light/dark)
   const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };  

 
return( 
  // The Provider component makes the context value available to all components within its tree.
  <>
   <h1>React Context API Example</h1>
   <p>This example demonstrates how to use the Context API to share state across components without prop drilling.</p>
   <p>Click the button below to toggle the theme between light and dark.</p>
   <br/> <br/>
   <div>
     <h2>Global Context Provider</h2>
     <p>This component is outside the theme context provider, so it will not have access to the context value.</p>
     <p>However, it can still render and display its own content.</p>
     <br/>  
     <GlobalComponent/> {/* This component is outside the Provider, so it won't have access to the context value */}
   </div>   
    <br/>   
   {/* ❌ Outside the Provider, context falls back to the default value */}
     
     <br/> <br/>
    <themeContext.Provider value={theme}>
    <div style={{border: '2px solid black', borderColor :'red' ,padding: '20px'}}>
      <h2>App (Parent)</h2>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <ComponentA/>   {/* Child component that doesn't need props thanks to context */}
    </div>
    </themeContext.Provider>
    <br/> 

    {/* ✅ Another Provider with a different value */}
    <themeContext.Provider value={'Monosaturate'}>
      <div style={{border: '2px solid black', borderColor :'orange' ,padding: '20px'}}>
        <GlobalComponent/>  {/* This component is outside the Provider, so it won't have access to the context value */}
      </div>
    </themeContext.Provider>
  </>
);
}

function ComponentA() {
return(
  <div style={{border: '2px solid black', borderColor :'green' , padding: '20px'}}>
    <h2>ComponentA (Child)</h2>
    <ComponentB/>
  </div>
);
}

function ComponentB() {
return(
  <div style={{border: '2px solid black',borderColor :'blue' , padding: '20px'}}>
    <h2>ComponentA (Grand Child)</h2>
    <ThemeComponent/>
  </div>
);
}

function ThemeComponent() {
  //useContext is a hook that allows you to access the context value directly without needing to pass it through props.
  const theme = useContext(themeContext);

return(
  //it gets the real value from the Provider.
  <div style={{border: '2px solid black',borderColor :'pink' , padding: '20px'}}>
    <h2>ThemeComponent (Great Grand Child)</h2>
   <p>The theme is : {theme}</p>
  </div>
);
}

function GlobalComponent() {
  //useContext is a hook that allows you to access the context value directly without needing to pass it through props.
  const theme = useContext(themeContext);

return(
  //it gets the real value from the Provider.
  <div style={{border: '2px solid black',borderColor :'purple' , padding: '20px'}}>
    <h2>GlobalComponent (Outside Provider)</h2>
   <p>The theme is : {theme}</p>
  </div>
);
}
export default App;