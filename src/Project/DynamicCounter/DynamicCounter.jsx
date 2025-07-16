
import React, { useState } from 'react';
import './DynamicCounter.css'

function App(){
  //we can Store array ,complex data structure in state , object
  const[counters,setCounters] = useState([{id:1,value:0}]);

  const addCounters = () =>{
    const newCounter ={id: counters.length + 1, value:0};
    // call settCounter bcz it is state update function ,spread existing value(counters) and add new one 
    //  below serCounters will be like this , add newCounter to existing array , existing array(...counters)
    // [{id:1,value:0}])
    // [{id:1,value:0}]) [{id:2,value:0}])
    //  [{id:1,value:0}]) [{id:2,value:0}]) [{id:3,value:0}])
    setCounters([...counters,newCounter])
  }
const incrementCounter = (id) =>{
  // increment the value of the counter, map through the counters and update the value of the specific counter // we can use id to identify which counter to update
  const updatedCounter = counters.map(counter => {
  return counter.id === id ? {...counter , value : counter.value + 1} : counter
});
setCounters(updatedCounter); //update state 
}

const decrementCounter = (id) =>{
  // decrement the value of the counter, map through the counters and update the value of the specific counter
  //  spread current counter and update the value of the specific counter
  setCounters(counters.map(c => {
   return  c.id === id ? {...c , value : c.value - 1} : c
  })) //update state 
}

const deleteCounter = (id) => {
  // filter out the counter with specific id ,.filter() It returns a new array excluding the counter with the matching id.
  const updatedCounter = counters.filter(counter => counter.id !==id);
  setCounters(updatedCounter)
};

  return(
    <div className='app-container'>
      <button onClick={addCounters}>Add Counter</button>
      {/* display counter */}
      <ul>
        {counters.map( counter => (
         <li key={counter.id}>
          Counter  {counter.id} : {counter.value}
          <button onClick={()=>incrementCounter(counter.id)}>Increment</button>
           <button onClick={()=> decrementCounter(counter.id)}>Decrement</button>
           <button className='delete-btn' onClick={()=> deleteCounter(counter.id)}>Delete</button>
         </li>
        ))}
      </ul>
    </div>

  );
}
export default App



