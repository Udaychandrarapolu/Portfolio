import "./Skills.css";

const skills = [
  {
    name: "AutoCAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/AutoCad_new_logo.svg/250px-AutoCad_new_logo.svg.png",
  },
  {
    name: "SOLIDWORKS",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SolidWorks_Logo.svg/150px-SolidWorks_Logo.svg.png?20130509090050",
  },
  {
    name: "ANSYS",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/ANSYS_logo.png",
  },
  {
    name: "MATLAB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/250px-Matlab_Logo.png",
  },
  {
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
  },
  {
    name: "MySQL",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/120px-MySQL_logo.svg.png",
  },
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/960px-Official_CSS_Logo.svg.png",
  },
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png",
  },
  {
    name: "Git & GitHub",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png",
  },
];

function Skills() {
  return (
    <div className="skills-wrapper">
      <h3 className="skills-heading">Technical Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
