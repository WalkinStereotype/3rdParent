import SkillButton from "./SkillButtonTemplate";
import { IoClose } from "react-icons/io5";

interface RemoveButtonProps {
  onClick: () => void;
}

export default function RemoveButton({
  onClick,
}: RemoveButtonProps) {
  return (
    <SkillButton onClick={onClick}>
      <span className="enlarge-icon"><IoClose /></span>
    </SkillButton>
  );
}
