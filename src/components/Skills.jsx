const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "ReactJS",
    "Redux",
    "Context",
    "Tailwind CSS",
    "Java",
    "DSA (Intermediate)",
    "Git",
    "Github"
  ]

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-carousel">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((skill, index) => (
            <div key={`duplicate-${index}`} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills