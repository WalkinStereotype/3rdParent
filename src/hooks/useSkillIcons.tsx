import {
  IoLibrary,
  IoCar,
  IoCash,
  IoRestaurant,
  IoWarning,
  IoDice,
  IoBrush,
  IoApps,
} from "react-icons/io5";

export default function useSkillIcons() {
  const iconOf = (type: string) => {
    switch (type) {
      case "home":
        return <IoLibrary />;
      case "car":
        return <IoCar />;
      case "finance":
        return <IoCash />;
      case "culinary":
        return <IoRestaurant />;
      case "emergency":
        return <IoWarning />;
      case "misc":
        return <IoDice />;
      case "custom":
        return <IoBrush />;
      case "all":
        return <IoApps />;
      default:
        return null;
    }
  };

  return [iconOf];
}
