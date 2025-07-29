import { useEffect } from 'react';
import './App.css'
import { useForm } from 'react-hook-form';

function App() {   
  const{register, handleSubmit, reset, watch} = useForm();
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
        Name : <input {...register('name')}/>
      </label>     
      <br/>
      <label>
          Email : <input {...register('email')}/>
      </label>
      <br/>
      <button type='submit'>Submit</button>
      <button type='reset' onClick={onReset}>Reset</button>
    </form>  
  </div>
);
}
export default App;