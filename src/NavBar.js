import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <NavLink
            to="/"
            className="nav-link"
            >
            Home
            </NavLink>
            <NavLink
            to="/emperors"
            className="nav-link"
            >
            Emperors
            </NavLink>
            <NavLink
            to="/emperorprofile"
            className="nav-link"
            >
            Emperor Profile
            </NavLink>
        </nav>
    )
}

export default NavBar;