import { Link, Outlet, useSearchParams } from "react-router-dom";

function About(){
     // ✅ React Router hook to manage query string parameters (?topic=value)
    const [searchParams,setSearchParams] = useSearchParams();
      // ✅ Get current topic from URL query params or fallback to "general"
    const topic = searchParams.get("topic") || "general";
    
    // ✅ Update URL query param when user clicks a topic button
    const handleTopic = (newTopic) => {
       console.log(topic);
       console.log(newTopic);
       setSearchParams({topic:newTopic});   // Updates ?topic=newTopic in URL         
    }

     // ✅ Example using Vanilla JS to read query params (for comparison)
    const urlParams = new URLSearchParams(window.location.search); //React DOm library
    const topicFromURL = urlParams.get("topic"); //URL Search Param , vanilla JS not react DOM 
    console.log("useSearch Hook :" ,topic);
    console.log("URLSearch Param :" ,topicFromURL);
    

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
            <h1 className="text-3xl font-bold text-rose-800">About Page</h1>
             <p className="text-lime-950 mt-4 text-lg">Learn more  about our mission , values.</p>

             <nav className="mt-6">
                <ul className="flex space-x-4">
                    <li> <Link to="team" className="text-blue-900 hover:underline">Our Team</Link></li>

                    <li> <Link to="/" className="text-blue-900 hover:underline">Back To Home</Link> </li>
                </ul>
             
             </nav>

                <div className="mt-8">
                    <h3 className="text-xl text-gray-800 ">Choose a topic:</h3>
                    <div className="flex space-x-3 mt-4 justify-center">
                    <button className="text-yellow-400 px-2 py-2   mt-4 p-5 text-lg bg-black hover:bg-green-800 rounded-lg " onClick={()=>handleTopic("Team")} >Team</button>
                
                    <button className="text-yellow-400 px-3 py-2 mt-4 p-5 text-lg bg-black hover:bg-green-800 rounded-lg" onClick={()=>handleTopic("Mission")}>Mission</button>
                
                    <button className="text-yellow-400 mt-4 px-3 py-2  p-5 text-lg bg-black hover:bg-green-800 rounded-lg" onClick={()=>handleTopic("Value")} >Value</button>
                </div>            
             </div>

             <div>
                <p className="mt-8 text-lg text-gray-900 mr-16">Curent Topic : {topic} </p>
             </div>

              {/*Outlet for Nested routes */}
             <div className="mt-8 w-full max-w-4">
                 <Outlet/> 
             </div>
            
        </div>
    );
}
export default About