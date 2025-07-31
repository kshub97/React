
import './App.css'
import { BrowserRouter as Router, Routes,Route }  from 'react-router-dom';
import Home from './Routing/Home';
import Contact from './Routing/Contact';
import About from './Routing/About';

function App() {

  return (
   <div className='App'>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>  
    </Router>    
   </div>
  );
}
export default App
