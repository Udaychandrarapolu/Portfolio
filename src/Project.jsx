import "./Project.css";

const projectData = [
  {
    title: "Design and Analysis of Compressed Air Turbine Vehicle",
    description: `Developed a novel compressed air turbine engine that converts compressed air energy into mechanical work using custom-designed impulse/reaction turbines. This zero-emission system utilizes lightweight, refillable air cylinders for eco-friendly propulsion.`,
    tools: "CAD Software (CATIA), FEAST (Stress Analysis)",
    highlights: [
      "Created 3D models ensuring ease of assembly.",
      "Conducted stress analysis for optimization.",
      "Presented design, praised for innovation and feasibility.",
    ],
    deployLink: "./src/assets/CATV report.pdf",
  },

  {
    title: "Landy – Product Landing Page",
    description: `A minimalist and responsive product landing page showcasing a fictional tech product. Features smooth scrolling, grid layout, and a user-focused design.`,
    tools: "HTML, CSS",
    highlights: [
      "Fast loading, performance-oriented design.",
      "Used Flexbox for layout and modular sections.",
      "Optimized spacing and typography for conversion.",
    ],
    deployLink: "https://udaychandrarapolu.github.io/Mini-Projects/Landy",
    codeLink:
      "https://github.com/Udaychandrarapolu/Mini-Projects/blob/main/Landy.html",
  },

  {
    title: "AeroPage – Airline Website Landing Page",
    description: `Responsive and modern airline landing page with brand-aligned aesthetics and adaptive layouts. Built solely with HTML and CSS.`,
    tools: "HTML, CSS",
    highlights: [
      "Built responsive layout using adaptive CSS.",
      "Emphasized visual hierarchy and branding.",
      "Implemented interactive styling using pure CSS.",
    ],
    deployLink:
      "https://udaychandrarapolu.github.io/Mini-Projects/Aeropage.html",
    codeLink:
      "https://github.com/Udaychandrarapolu/Mini-Projects/blob/main/Aeropage.html",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <details key={index} className="project-card">
            <summary className="project-summary">{project.title}</summary>
            <div className="project-body">
              <p>{project.description}</p>
              <p>
                <strong>Tools:</strong> {project.tools}
              </p>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="project-buttons">
                {project.deployLink && (
                  <a
                    href={project.deployLink}
                    target="c:\Users\Dell\Desktop\LOR\CATV report.pdf"
                    rel="CATV project"
                    className="btn"
                  >
                    View Project
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Projects;
