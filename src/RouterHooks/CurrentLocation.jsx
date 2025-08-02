import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
    const location =useLocation();
    return (
        <div className='min-h-2 contain-content bg-transparent'>
              <h2 className='text-red-800 hover:text-neutral-800 font-semibold transition-transform'>Current Path : {location.pathname}</h2>
        </div>
       
    );
};
export default CurrentLocation;