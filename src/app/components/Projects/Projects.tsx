import "./Projects.css";

const projects = [
  {
    title: "Online Matrimony App",
    desc: "Developed a full-stack matchmaking web application using React.js and Node.js with Express. Integrated MongoDB to manage user profiles and matchmaking data. Followed best practices for clean and modular code to ensure scalability and performance. Completed as part of internship project at HCL Technologies",
  },
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio built using Next.js, featuring custom CSS, project showcases, and a contact form. Designed to highlight my full-stack development skills, resume, and internship experience. Optimized for both desktop and mobile, the site reflects clean UI, modular structure, and professional presentation.",
  },
];
  
  const Projects = () => {
    return (
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="projects__grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default Projects;
  