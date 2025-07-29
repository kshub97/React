import { useEffect } from 'react';
import './App.css'
import { useForm } from 'react-hook-form';

function App() {   
  const{register, handleSubmit, reset, watch , formState:{errors}} = useForm();
  const onSubmit = (data) => console.log('Form Data : ' , data);
  const onReset = () => {
  reset({ name: '', email: '' }); // manually reset values
};
const watchedName = watch('name');
const watchedEmail = watch('email');
//console.log(watchedName);

useEffect(() => {
  console.log(watchedName);
} , [watchedName]);

useEffect(() => {
  console.log(watchedEmail);
} , [watchedEmail]);
 
return(  
  <div>
    <h1>Forms In react</h1>
    <br/>
    <form onSubmit={handleSubmit(onSubmit)} >
      <label>
        {/*  Name : <input {...register('name', { required:true} */}
        {/* {errors.name && <span>Name cannot be blank</span>}  */}
        
        Name : <input {...register('name', 
                                        { required: 'Name cannot be blank' ,
                                         minLength: {value : 2 , message : 'Name must be at least two characters'}
                                        }
                                  )}/>
      </label> 
       {' '} 
       {errors.name && <span style={{color:'red'}}>{errors.name.message}</span>} 
      <br/>   
          
      <label>
          Email : <input {...register('email', {
              required : 'Email cannot be empty' ,pattern: {value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i , message:'Invalid Email format'}
          })}/>
      </label>{' '}
      {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>} 
      <br/>
      <button type='submit'>Submit</button>
      <button type='reset' onClick={onReset}>Reset</button>
    </form>  
  </div>
);
}
export default App;