import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


function App() {   

  // State to store the fetched data,data	Stores API data
  const[data,setData] = useState([]);

   // State to track if data is still loading, loading	Shows spinner
   const[loading,setLoading] = useState(false);

  // State to handle any errors during fetch,null means "no error yet" — a clean state, error	Handles fetch failure
  const[error,setError] = useState(null);


    // Make two parallel GET requests using axios.all
  useEffect(()=>{ // Fetching data from API Using Axios , automatic json parsed 
      setLoading(true);
      axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
       axios.get('https://jsonplaceholder.typicode.com/users'),
      ])
      // axios.spread lets us handle both responses separately
      .then(axios.spread((post,user)=> {
        console.log("post data : " ,post.data);
      console.log("user data : " ,user.data);
      console.log("post " ,post);
      console.log("user " ,user);
       setData(post.data)
        setLoading(false)
        //throw new Error("Something went wrong");
      })).catch( (error) => {
      console.error("Error fetching data : ", error);
      setError(error.message); // Set error
      setLoading(false);  // ✅ Stop loading even if fetch fails
    });
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