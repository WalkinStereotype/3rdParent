import "./CategorySelector.css";
import CategoryButton from "./CategoryButton";

interface CategorySelectorProps {
  categories: string[];
  selectedCategory: string | null;
  onTagPress: (category: string | null) => void;
}

export default function CategorySelector({
  categories,
  selectedCategory,
  onTagPress,
}: CategorySelectorProps) {
  return (
    <div className="category-selector">
      <CategoryButton
        key="filter-all"
        name="all"
        onClick={() => onTagPress(null)}
        selected={selectedCategory === null}
      />
      {categories.map((c) => (
        <CategoryButton
          key={"filter-" + c}
          name={c}
          onClick={() => onTagPress(c)}
          selected={selectedCategory === c}
        />
      ))}
    </div>
  );
}
