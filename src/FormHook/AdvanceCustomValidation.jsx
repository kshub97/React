import { useEffect } from 'react';
import './App.css'
import { useForm } from 'react-hook-form';

function App() {   
  // Destructure useful methods from useForm
  const{register, handleSubmit, reset, watch , formState:{errors}} = useForm({
    mode : 'onChange' // so form will be validated real time have other opton also on submit it will check  
                      // Validate on every change (other modes: 'onSubmit', 'onBlur', etc.)
  });
  const onSubmit = (data) =>{ console.log('Form Data : ' , data), reset()}; //reset after submission

const watchedName = watch('name');
const watchedEmail = watch('email');
const watchedPassword = watch('password');

//To simulate an API call delay (as if we are calling a backend).
//For validation here we will be calling api to get username from db as of now manual we are doing, it will return boolean 
const existingUsername = ['admin' ,'john' ,'shubh'];
const checkIfusernameExist = async (username) => {
await new Promise((resolve) => {setTimeout(resolve,1000);}) // to delay so api will run ✅ With this Promise, it behaves like: "Wait 1 second → then check if username exists".
return existingUsername.includes(username);
};

//console.log(watchedName);

// const validateName = ((value)=> {
//   if(value =='admin') return ' admin not Allowed'
//   return true;
// });

// Debug: Log watched values
useEffect(() => {
  console.log(watchedName);
} , [watchedName]);

useEffect(() => {
  console.log(watchedEmail);
} , [watchedEmail]);

useEffect(() => {
  console.log(watchedPassword);
} , [watchedPassword]);
 
return(  
  <div>
    <h1>Forms In react</h1>
    <br/>
    <form onSubmit={handleSubmit(onSubmit)} >
      <label>
        {/*  Name : <input {...register('name', { required:true} */}
        {/* {errors.name && <span>Name cannot be blank</span>}  */}
        
        Name : <input {...register('name', 
                                       {   required: 'Name cannot be blank' ,
                                           minLength: {value : 2 , message : 'Name must be at least two characters'},
                                          //  validate : validateName,
                                          validate :{  // custom validation
                                             notAdmin : (value) => value !=='admin' || 'Admin is not allowed',  //When false, the right side of || is returned 
                                            isNotNumber :(value) => isNaN(value) || 'Name cannot be number',
                                            checkUsername :async (value) =>{
                                                const exist = await checkIfusernameExist(value);
                                                return !exist || 'Username already taken';  // async validation
                                            }
                                          }
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
      {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>} <br/>
      <label>
          Password : <input type='password' {...register('password', {
              required : 'Password cannot be empty',
              minLength :{value : 4, message:'Password must be at least 4 character'},
          })}/>
      </label>{''}
       {errors.password && <span style={{color:'red'}}>{errors.password.message}</span>} <br/>
      <label>
         Confirm Password : <input type='password' {...register('confirmPassword', {
              required : 'Password cannot be empty',
              minLength :{value : 4, message:'Password must be at least 4 character'},
             validate : (value) => value === watch('password') || 'Password do not match'  //value === watchPassword fun call here 
          })}/>
      </label>
          {errors.confirmPassword && <span style={{color:'red'}}>{errors.confirmPassword.message}</span>} <br/>
      <button type='submit'>Submit</button>
      <button type='reset' onClick={()=>reset()}>Reset</button>    {/* using arrow fun to call inbuilt reset fun to reset */}
    
    </form>  
  </div>
);
}
export default App;