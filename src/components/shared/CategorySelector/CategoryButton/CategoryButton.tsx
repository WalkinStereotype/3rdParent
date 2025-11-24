import "CategoryButton.css";

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
  return (
    <button
      onClick={onClick}
      className={selected ? "category-button selected" : "category-button"}
    >
      {name}
    </button>
  );
}
