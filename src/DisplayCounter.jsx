import { useSelector } from "react-redux";

const DisplayCounter = () =>{
    const count = useSelector((state => state.counter.count)); //data share is possible in different component ,//using redux react toolkit
    return (
        <div className="bg-slate-300 p-8 m-4">
        <h2>Current Count in Display Component : {count}</h2>
    </div>
    );
    
};
export default DisplayCounter;