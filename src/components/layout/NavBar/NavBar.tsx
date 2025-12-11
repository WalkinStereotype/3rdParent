import "./NavBar.css";

import Logo from "../Logo";
import NavItem from "./NavItem";
import { menuItems } from "./menuItems";

import { useUser } from "@/hooks/useUser";

export default function NavBar() {
  const { user, loading } = useUser();
  const username = loading ? "loading" : user ? user.username : "Guest";

  const {
    path: profilePath,
    icon: profileIcon,
    activeIcon: profileActiveIcon,
  } = menuItems[1][0];

  const profileButton = (
    <NavItem
      key={profilePath}
      name={username}
      path={profilePath}
      icon={profileIcon}
      activeIcon={profileActiveIcon}
    />
  );

  return (
    <div className="navbar">
      <div className="brand">
        <Logo />
        <h1>3rd Parent</h1>
      </div>

      <nav className="menu">
        {menuItems[0].map((item) => (
          <NavItem
            key={item.path}
            name={item.name}
            path={item.path}
            icon={item.icon}
            activeIcon={item.activeIcon}
          />
        ))}

        {profileButton}
      </nav>
    </div>
  );
}
