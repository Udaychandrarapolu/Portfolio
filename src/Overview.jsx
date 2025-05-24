import "./Overview.css";
function Overview() {
  return (
    <section className="overview">
      <div className="overview-container">
        <div className="overview-image">
          <img src="./src/assets/uday.jpg" alt="Profile" />
        </div>
        <div className="overview-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer with a strong background in
            React, CSS, and responsive design. My mission is to build clean,
            efficient, and scalable UI components that enhance user experience.
            I specialize in crafting pixel-perfect web applications that are
            both visually appealing and highly functional.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
