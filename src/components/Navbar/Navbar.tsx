import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/">
                <img src="https://i.imgur.com/MqUjCJZ.png" alt="logo" className="logo" />
            </Link>

            <ul className="navbar__links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <Link to="/create-post" className="create-post">
                Create
            </Link>
        </header>
    );
}

export default Navbar;
