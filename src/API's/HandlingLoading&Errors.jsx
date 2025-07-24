import { useEffect, useState } from 'react';
import './App.css'


function App() {   

  // State to store the fetched data
  const[data,setData] = useState([]);

   // State to track if data is still loading
   const[loading,setLoading] = useState(false);

  // State to handle any errors during fetch,null means "no error yet" — a clean state.
  const[error,setError] = useState(null);


    // useEffect runs once after the component mounts
  useEffect(()=>{ // Fetching data from API
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response .json()) // Parse JSON response
    .then(data => {setData(data) // Set fetched dat
                  setLoading(false) // ✅ Stop loading after successful fetch
                 throw new Error("Something went wrong");  //manual error added to check API error response ,comment uncomment to test


  }).catch( (error) => {
    console.error("Error fetching data : ", error);
    setError(error.message); // Set error
    setLoading(false);  // ✅ Stop loading even if fetch fails
  })

    },[]); // Empty dependency array means this runs once

    if(loading){
      return <h2>loading...</h2>
    }

    if(error){
      return <h2>Error : {error} </h2>
    }
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