function ProjectList(){
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
    return(
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
    );
}
export default ProjectList