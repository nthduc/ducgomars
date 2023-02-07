import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#">
        Cosmic Navbar
      </a>
      <ul className="navbar__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
