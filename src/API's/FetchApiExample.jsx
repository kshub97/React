import { useEffect, useState } from 'react';
import './App.css'


function App() {   

  // State to store the fetched data
  const[data,setData] = useState([]);

    // useEffect runs once after the component mounts
  useEffect(()=>{ // Fetching data from API
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response .json()) // Parse JSON response
    .then(data => setData(data))
    },[]); // Empty dependency array means this runs once
return(
  
   // Render the list of posts
  <div>
    <h1>API's In React</h1>
    <ul>
      {data.map((item) => (
        <li key = {item.id}> 
        <p><strong>{item.title}</strong></p>
        <p>{item.body}</p>
        </li>
      ))}
    </ul>
  
  </div>
);
}
export default App;