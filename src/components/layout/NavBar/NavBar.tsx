import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <h1>3rd Parent</h1>
      </div>

      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/todo">To-do</NavLink>
        <NavLink to="/logs">Logs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </div>
    
  );
}
