
import './App.css'
import Counter from './Counter';
import DisplayCounter from './DisplayCounter';

function App() {

  
  return (
   <div className="bg-slate-100">
    <h1 className='bg-gradient-to-bl text-red-700 border-lime-400 font-extrabold'>Welcome !</h1>
    <Counter/>
    <DisplayCounter/>
   </div>
  );
}

export default App
