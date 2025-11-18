// src/components/layout/NavBar/NavItem.tsx
import { NavLink } from "react-router-dom";

interface NavItemProps {
  name: string;
  path: string;
  icon: React.ComponentType;
  activeIcon?: React.ComponentType | null;
}

export default function NavItem({
  name,
  path,
  icon: Icon,
  activeIcon: ActiveIcon,
}: NavItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
    >
      {({ isActive }) => (
        <>
          {isActive ? (
            ActiveIcon ? (
              <ActiveIcon />
            ) : (
              // <span style={{ fontSize: "1.1em" }}>
                <Icon />
              // </span>
            )
          ) : (
            <Icon />
          )}
          {name}
        </>
      )}
    </NavLink>
  );
}
