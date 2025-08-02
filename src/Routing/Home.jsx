import { useNavigate } from "react-router-dom";

function Home(){
     const navigate = useNavigate();
    const handleLogIn = () => {
        navigate("/dashboard");
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
            <h1 className="text-3xl font-bold text-rose-800">Home Page</h1>
            <p className="text-lime-950 mt-4 text-lg">Welcome to  the homepage. Explore the Site !</p>
            <button className="text-yellow-400 mt-4 p-2 text-lg bg-black hover:text-green-400" onClick={handleLogIn}>LogIn</button>

        </div>
    );
}
export default Home