// src/components/layout/NavBar/menuItems.ts
import {
  IoHomeOutline,
  IoHome,
  IoList,
  IoCalendarClearOutline,
  IoCalendarClear,
  IoAlbumsOutline,
  IoAlbums,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";

export const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: IoHomeOutline,
    activeIcon: IoHome, // filled
  },
  {
    name: "Skills",
    path: "/skills",
    icon: IoList,
    activeIcon: null, // no alternative, just bold text
  },
  {
    name: "To-do",
    path: "/todo",
    icon: IoCalendarClearOutline,
    activeIcon: IoCalendarClear,
  },
  {
    name: "Logs",
    path: "/logs",
    icon: IoAlbumsOutline,
    activeIcon: IoAlbums,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: IoPersonOutline,
    activeIcon: IoPerson, // replace with a real profile icon if needed
  },
];
