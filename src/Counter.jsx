
//useSelector = Receives data from the store (read current state).listen to store
//useDispatch = Sends actions to the store (to update state).talk to store 

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/actions/action";

    
const Counter = () =>{
    const count = useSelector((state => state.count))
    const dispatch = useDispatch();
    return (
        <div className="bg-slate-500">
            <h2>Count in Counter Component : {count}</h2>
            <button className="bg-amber-950 text-ellipsis hover:bg-yellow-500 m-2 p-3" onClick={()=>dispatch(increment())}>Increment</button>
            <button className="bg-amber-950 text-ellipsis hover:bg-emerald-500 m-2 p-3" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    );
};
export default Counter;