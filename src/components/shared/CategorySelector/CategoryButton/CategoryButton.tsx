import "./CategoryButton.css";
import useSkillIcons from "@/hooks/useSkillIcons";

interface CategoryButtonProps {
  name: string;
  onClick: () => void;
  selected?: boolean;
}

export default function CategoryButton({
  name,
  onClick,
  selected,
}: CategoryButtonProps) {
  const [iconOf] = useSkillIcons();
  const className = "category-button " + name + (selected ? " selected" : "");

  return (
    <button onClick={onClick} className={className}>
      {iconOf(name)}
      <h3>{name}</h3>
    </button>
  );
}
