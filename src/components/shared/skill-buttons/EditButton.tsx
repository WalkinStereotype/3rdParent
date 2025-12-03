import SkillButton from "./SkillButtonTemplate";
import { IoPencil } from "react-icons/io5";

interface EditButtonProps {
  onClick: () => void;
}

export default function EditButton({ onClick }: EditButtonProps) {
  return (
    <SkillButton onClick={onClick}>
      <span className="enlarge-icon">
        <IoPencil />
      </span>
    </SkillButton>
  );
}
