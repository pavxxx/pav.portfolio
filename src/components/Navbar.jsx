function Navbar() {
  return (
    <nav className="navbar hover-target">
      <div className="nav-brand">Pavithra.dev</div>
      <ul className="nav-links">
        <li><a href="#home" className="hover-target">Home</a></li>
        <li><a href="#work" className="hover-target">Work</a></li>
        <li><a href="#skills" className="hover-target">Skills</a></li>
        <li><a href="#contact" className="hover-target">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
