
import { useState } from 'react';
import './App.css'


function App() {   
  const [formData, setFormData] = useState({
    name : '',
    email : ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData ,[event.target.name]:event.target.value,
    })
    console.log(event.target.value);
    
    
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Form Data Submitted', formData);
    
  };  
  const handleReset = (event) => {
    event.preventDefault();
    setFormData({
      name : " ",
      email : " ",
    })
    console.log('Value is Reset', formData);
    
  }
return(
  
  <div>
    <h1>Forms In react</h1>
    <br/>
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Name : <input type='text' name='name'  value={formData.name} onChange={handleChange}></input>
      </label>
      <br/>
      <label>
          Email : <input type='email' name='email' value={formData.email} onChange={handleChange}></input>
      </label>
      <br/>
      <button type='submit'>Submit</button>
      <button type='reset'>Reset</button>
    </form>
  
  </div>
);
}
export default App;