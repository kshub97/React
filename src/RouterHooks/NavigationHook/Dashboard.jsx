import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
            <h1 className="text-3xl font-bold text-rose-800">Welcome!</h1>
             <button className="text-yellow-400 mt-4 p-2 text-lg bg-black hover:text-green-400" onClick={handleLogout}>LogOut</button>
        </div>
    );
};
export default Dashboard;