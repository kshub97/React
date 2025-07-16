import React, { useState } from 'react';
import './App.css';
function App(){
  const[formData,setForm]=useState({
    text:'',
    checkbox:false,
    radio:'',
   select: ''
  })
  // Function to handle changes in the form inputs
  // This function will update the state based on the input type
  // It uses the name attribute of the input to determine which field to update ,✅ Destructuring name and value from e.target
  // The value is set based on the input type (text, checkbox, radio, select) , ✅ Wrapping everything in { ...formData, ... } to preserve previous values
  // For checkboxes, // Use `checked` for checkbox, otherwise use `value`
  // For radio buttons, it uses the value of the selected option
  // For text inputs, it uses the value of the input
  // For select dropdowns, it uses the value of the selected option
  // The state is updated using the setForm function, which is provided by the useState
  // hook. The spread operator is used to copy the previous state and update the specific field
  // This allows us to maintain the previous values of the form while updating only the changed field
  // This is a common pattern in React for handling forms and input changes
  // It ensures that the form remains controlled, meaning the input values are always in sync with
  // the component's state. This is important for form validation and submission.
  // The handleChange function is called on the onChange event of each input field, allowing  
  // ...formData → Keeps all the previous form fields as they are.
  // [name] → Dynamically sets the key in the object.If the input has name="text", then it's like writing: text: value
  // When you type, e.target.name is "username" & e.target.value is "shubham". => [name]: value becomes username: "shubham" so final state =>  ...formData,  username: "shubham"
  const handleChange=(e)=>{
    const{name,value,type,checked} = e.target;
    console.log(e); 
    console.log(e.target); 
     console.log("Input changed:", { name, value, type, checked });
    setForm({
      // Using the spread operator to copy the previous state and update the specific field
      ...formData,
      [name]: type === 'checkbox' ? checked : value // If it's a checkbox, use checked, otherwise use value
      // For radio buttons, the value will be the selected option
      // For text inputs, the value will be the input value
      // For select dropdowns, the value will be the selected option  
    }); 
  };
  return(
   <div className="form-group">
      <h1>Form Example</h1>
      <form>
       <div>

         {/* Text Input */}
        <div className="form-field">
        <label >Text : </label>
        <input type="text"  name="text" onChange={handleChange}
         placeholder="Enter text here" value={formData.text} />
        </div>  

      {/* Checkbox */}
        <div>
          <label> 
            <input type='checkbox' name='checkbox' onChange={handleChange} checked={formData.checkbox}/>
            Checkbox 
          </label>
          </div> 
    {/* Radio button */}
          <div>
      <label>
        Radio
        < input type='radio' name='radio'onChange={handleChange} value='option 1' checked={formData.radio==="option 1"}/>
         option 1
      </label>
      <label>
        < input type='radio' name='radio'onChange={handleChange} value = 'option 2' checked={formData.radio==="option 2"}/>
         option 2
      </label>
          </div>
      {/* Select Dropdown */}
      <div>
        <label>Select : </label>
        <select name='select' typeof='select' onChange={handleChange} value={formData.select}>
          <option value=''>--Select an option--</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
      </div>

    {/* Form Data Real time */}
    <div className='form-data'>
      <h2>Form Data:</h2>
      <p><strong>Text : </strong>{formData.text||'N/A'}</p>
      <p><strong>Checkbox : </strong>{formData.checkbox ?'Checked':'Unchecked'}</p>
      <p><strong>Radio : </strong>{formData.radio || 'N/A'}</p>
      <p><strong>Select : </strong>{formData.select || 'N/A'}</p>


    </div>

       </div>
      </form>       
   </div>
  );
}
export default App;