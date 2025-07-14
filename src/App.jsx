
import './App.css'

function App() {

  //create variable we need 
  const copyright = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fcopyright-symbol&psig=AOvVaw3kt3ag41cPY3A0zuUsOTfo&ust=1752513974439000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDC37qtuo4DFQAAAAAdAAAAABAE";
  const name = "Shubham Kumar";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project one",
      description: "A web Development built on Python",
      link: "#"
    },
    {
      title: "Project two",
      description: "A UI Development built on React",
      link: "#"
    },
    {
      title: "Project three",
      description: "A BackEnd Development built on Springboot",
      link: "#"
    }
  ]

  return (
   <div className='App'>
    {/* Header Section */}
    <header id='header' className='header-section'>
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav>
        {/* linling with id like about section #id so when click on this redirect to that section  */}
        <a href='#about'>About</a>  
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>

    </header>
    {/* About Section */}
    <section id='about'className='about-section'>
      <h2>About Me </h2>
      <p>Hello I am {name}, a passionate {profession}</p>
    </section>
   
   {/* Project Section */}
   <section id='projects' className='projects-section'>
    <h2>Projects</h2>
    <div className='projects-list'>
      {projects.map((projects,index) =>(
        <div key={index} className='project-item'>
          <h3>{projects.title}</h3>  
          <h3>{projects.description}</h3> 
          <a href={projects.link} target='blank' rel='noopener noreferer'>View Project</a>
        </div>
      ))}
    </div>
   </section>

   {/* Contact Section */}
   <section id='contact' className='contact-section'>
    <h2>Contact Me</h2>
    <p>Please contact me if you wish at <a href='mailto:shubk@gmail.com'>shubk@gmail.com</a></p>
   </section>

   {/* Footer Section */}
   <footer id='footer' className='footer-section'>
    <p>2025. All Right Resevered <a href={copyright}>C.</a></p>
   </footer>
   </div>
  );
}

export default App
