
import './App.css'
import { BrowserRouter as Router, Routes,Route, Link }  from 'react-router-dom';
import Home from './Routing/Home';
import Contact from './Routing/Contact';
import About from './Routing/About';
import Team from './Routing/Team';
import NotFound from './Routing/NotFound';

function App() {

  return (
   
    <Router>
      <div className='min-h-screen bg-gray-200'>
      <nav className='bg-stone-900 p-4' >
        <ul className='flex justify-center space-x-7'>
          <li className='text-amber-300 hover:text-green-300 font-semibold transition-transform'>
            <Link to='/'>Home</Link></li>
          <li className='text-amber-300 hover:text-green-300 font-semibold transition-transform'>
            <Link to='/about'>About</Link></li>
          <li className='text-amber-300 hover:text-green-300 font-semibold transition-transform'>
            <Link to='/contact'>Contact</Link></li>        
        </ul>
      </nav>
      <div className='contain mx-auto py-8'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}>
        <Route path='team' element={<Team/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    </div>  
    </Router>    
   
  );
}
export default App
