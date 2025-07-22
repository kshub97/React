
import './App.css'

function App() {
  const theme = 'dark';
  
 
return(
  //This <> </> is called a React Fragment.
  <>
    <h1>Props Drilling Example</h1>
    <p>Props Drilling means passing data (props) from a top-level component all the way down to deeply nested components even if some intermediate components don’t need that data.</p>
    <br/> <br/>
    <div style={{border: '2px solid black', borderColor :'red' ,padding: '20px'}}>
      <h2>App (Parent)</h2>
      <ComponentA theme = {theme}/>
    </div>
  </>
);
}

function ComponentA({theme}) {
return(
  <div style={{border: '2px solid black', borderColor :'green' , padding: '20px'}}>
    <h2>ComponentA (Child)</h2>
    <ComponentB theme = {theme}/>
  </div>
);
}

function ComponentB({theme}) {
return(
  <div style={{border: '2px solid black',borderColor :'blue' , padding: '20px'}}>
    <h2>ComponentA (Grand Child)</h2>
    <ThemeComponent theme = {theme}/>
  </div>
);
}

function ThemeComponent({theme}) {
return(
  <div style={{border: '2px solid black',borderColor :'pink' , padding: '20px'}}>
    <h2>ThemeComponent (Great Grand Child)</h2>
   <p>The theme is : {theme}</p>
  </div>
);
}
export default App;