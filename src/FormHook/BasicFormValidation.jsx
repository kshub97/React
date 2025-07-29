
import { useState } from 'react';
import './App.css'


function App() {   
  const [formData, setFormData] = useState({
    name : '',
    email : ''
  });

  //a place to store validation messages
  const [error, setError] = useState({});

  // checks formData 
  const validate = () => {
    const newError = {}; //If no problems → empty Object {}.
    if(!formData.name.trim()) {
      newError.name = 'Name is required';
    }
    return newError;
  }

  const handleChange = (event) => {
    const{name} = event.target; //destructuring: name="email" or name="name"  , value="whatever the user typed"

    setFormData({
      ...formData ,[event.target.name]:event.target.value,
    })
    console.log("changes :" ,event.target.value);
    if(error[name]){   //error[name] means: If user is typing in the Name/Email field → check error["name"]/error["email"]
      const newError = {...error};
      delete newError[name]; // remove this field’s error
      setError(newError);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const validationErrors = validate(); //validationErrors will either be {} (no errors) or have some keys.

    if(Object.keys(validationErrors).length>0){
      setError(validationErrors);
    }else{
      console.log('Form Data Submitted', formData);
    }   
    
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
      {error.name && <span style={{color : 'red'}}>{error.name}</span>}
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