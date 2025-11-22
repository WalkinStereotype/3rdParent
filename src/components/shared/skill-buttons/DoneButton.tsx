import SkillButton from "./SkillButtonTemplate";
import { IoCheckmark } from "react-icons/io5";

interface DoneButtonProps {
  onClick: () => void;
}

export default function DoneButton({
  onClick,
}: DoneButtonProps) {
  return (
    <SkillButton onClick={onClick}>
      <span className="enlarge-icon"><IoCheckmark /></span>
    </SkillButton>
  );
}
