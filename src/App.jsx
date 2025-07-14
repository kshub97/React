
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProfileCard from './propsExample/ProfileCard';
import PropTypes from 'prop-types';

function App() {
  const handleSkillClick = (skill) => {
    alert(`You clicked on ${skill}`);
  };
const aliceProfile  = {
    name: "alice",
    age: 30,
    occupation: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    isMember: true,
    bio: "Alice is a passionate software engineer with a love for building web applications.",
    onSkillClick: handleSkillClick
  };
  
  const bobProfile = {
    name: "Bob",
    age: 28,
    occupation: "Data Scientist",
    skills: ["Python", "Machine Learning", "Data Analysis"],
     isMember: false,
    bio: "Bob is a data scientist who enjoys extracting insights from data and building predictive models.",
    onSkillClick: handleSkillClick
  };
  const charlieProfile = {
    name: "Charlie",
    age: 32,
    occupation: "UI/UX Designer",
     isMember: true,
    skills: ["Figma", "Adobe XD", "User Research"],
    bio: "Charlie is a UI/UX designer focused on creating intuitive and user-friendly interfaces.",
    onSkillClick: handleSkillClick
  }; 

  return(

    <div className="app-container">
      <ProfileCard {...aliceProfile}/>
      <ProfileCard {...bobProfile}/>
      <ProfileCard {...charlieProfile} />
    </div>
  );

}



// function App() {

//   //create variable we need 

//   return (
//    <div className='App'>
//     {/* Header Section */}     
//      <Header/>
//      {/* About Section */}
//     <About/>   
//    {/* Project Section */}   
//     <ProjectList/>
//    {/* Contact Section */}
//    <Contact/>
//    {/* Footer Section */}
//     <Footer/>
//    </div>
//   );
// }

export default App
