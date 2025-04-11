import "./Skills.css";

const skills = [
  "JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS", "Java", "Git", "Express.js", "python", "Bootsrap",
];
  
  const Skills = () => {
    return (
      <section className="skills" id="skills">
        <h2>My Skills</h2>
        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default Skills;