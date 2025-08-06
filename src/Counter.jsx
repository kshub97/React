
//useSelector = Receives data from the store (read current state).listen to store
//useDispatch = Sends actions to the store (to update state).talk to store 

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/actions/action";

    
const Counter = () =>{
    const count = useSelector((state => state.counter.count)) //using redux react toolkit
    const dispatch = useDispatch();
    return (
        <div className="bg-red-100 m-5 p-5 justify-center">
            <h2>Count in Counter Component : {count}</h2>
            <button className="bg-orange-50  hover:bg-emerald-500 m-2 p-3" onClick={()=>dispatch(increment())}>Increment</button>
            <button className="bg-orange-50  hover:bg-emerald-500 m-2 p-3" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    );
};
export default Counter;