import SkillButton from "./SkillButtonTemplate";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

interface SaveButtonProps {
  onClick: (v: boolean) => void;
  isPriority: boolean;
}

export default function SaveButton({
  onClick,
  isPriority
}: SaveButtonProps) {
  const icon = isPriority ? <IoBookmark /> : <IoBookmarkOutline />;

  return (
    <SkillButton onClick={() => onClick(!isPriority)}>{icon}</SkillButton>
  );
}
