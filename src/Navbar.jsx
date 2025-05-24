import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-name">Uday Chandra Rapolu</div>
        <div className="navbar-buttons">
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
