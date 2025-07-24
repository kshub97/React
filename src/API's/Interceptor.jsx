import { useState } from 'react';
import './App.css'
import axios from 'axios';

//Request Interceptor
axios.interceptors.request.use((request) => {
    console.log("Starting Request... " ,request);
    return request;
})

//Response Interceptor
axios.interceptors.response.use((response) => {
    console.log("Response... " ,response);
    return response;
})

function App() {   
   // State to hold posts data
  const[data, setData] = useState([]);

   // Handle form submission to send POST request
  const handleSubmit = (event) => {
    event.preventDefault()  // This stops the page from reloading
    const newPost = {
      title : "Shubham",
      body : 'Hey There This is Post Api',
      userId : 1
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
           // Create a unique ID yourself
         const postWithCustomId = {
          ...response.data,
          id: Date.now() // Overwrite API id with a real unique one
        };

        console.log('New Post Added!', response.data),
         // Append new post to existing data
        setData( prevdata => [...prevdata, postWithCustomId])
      }
      ).catch(error => console.error('Post creation failed:', error));   
  }
return(
  
   // Render the list of posts
  <div>
    <h1>Post Request Axios</h1>
    <br/> 
    <form onSubmit={handleSubmit}>
  <button type='submit'> Add Post</button>
    </form>

    {/* To display added post */}
    <ul>      
      {data.map( (item) =>(
        
        <li key={item.id}>
          <p>Added Post :</p> <br/>
          <strong>{item.title}</strong><br/>
          {item.body}
        </li>
      ))}
    </ul>
  
  </div>
);
}
export default App;