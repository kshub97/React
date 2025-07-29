import './App.css'
import { useForm } from 'react-hook-form';

function App() {   
  const{register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => console.log('Form Data : ' , data);
  const onReset = () => {
  reset({ name: '', email: '' }); // manually reset values
};
 
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