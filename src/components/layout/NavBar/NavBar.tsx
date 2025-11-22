import "./NavBar.css";

import Logo from "../Logo";
import NavItem from "./NavItem";
import { menuItems } from "./menuItems";

// import { IoAdd, IoLink, IoCheckmark } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="brand">
        <Logo />
        <h1>3rd Parent</h1>
      </div>

      <nav className="menu">
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            name={item.name}
            path={item.path}
            icon={item.icon}
            activeIcon={item.activeIcon}
          />
        ))}
      </nav>
    </div>
  );
}
