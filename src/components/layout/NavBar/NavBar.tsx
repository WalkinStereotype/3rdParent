import "./NavBar.css";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";

import {
  IoHome,
  IoHomeOutline,
  IoList,
  IoCalendarClear,
  IoCalendarClearOutline,
  IoAlbums,
  IoAlbumsOutline,
} from "react-icons/io5";

// import { IoAdd, IoArrowBack, IoLink, IoCheckmark } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="brand">
        <Logo />
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
