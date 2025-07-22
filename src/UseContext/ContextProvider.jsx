
import { createContext, useContext, useState } from 'react';
import './App.css'

 const themeContext = createContext('contarst');
function App() { 
  // State to hold the current theme (light/dark)
   const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };  

 
return( 
  //This <> </> is called a React Fragment.
  <>
    <h1>CreateContext ,UseContext & Provider Example</h1>
    <p> createContext(defaultValue) creates a context (must be outside the component tree).</p>
    <p>useContext(Context) is how you consume the value anywhere inside the tree.</p>
   
    <br/> <br/>    
    {/* Context.Provider supplies the value to the components that want to use it via useContext. */}
     {/* All child components here can access `dark` via useContext */}
    <themeContext.Provider value={theme}>
    <div style={{border: '2px solid black', borderColor :'red' ,padding: '20px'}}>
      <h2>App (Parent)</h2>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <ComponentA/>   {/* Child component that doesn't need props thanks to context */}
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
export default App;