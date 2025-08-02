import { Link, Outlet } from "react-router-dom";

function About(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
            <h1 className="text-3xl font-bold text-rose-800">About Page</h1>
             <p className="text-lime-950 mt-4 text-lg">This Page provides information about our mission , value , etc.</p>

             <nav className="mt-6">
                <ul className="flex space-x-4">
                    <li> <Link to="team" className="text-blue-900 hover:underline">Our Team</Link></li>

                    <li> <Link to="/" className="text-blue-900 hover:underline">Back To Home</Link> </li>
                </ul>

             </nav>
             <div className="mt-5 min-w-full max-w-4">
              <Outlet/>  
             </div>
        </div>
    );
}
export default About