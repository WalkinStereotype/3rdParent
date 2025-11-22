import SkillButton from "./SkillButtonTemplate";
import { IoStar, IoStarOutline } from "react-icons/io5";

interface StarButtonProps {
  onClick: (v: boolean) => void;
  isStar?: boolean;
}

export default function StarButton({
  onClick,
  isStar = false,
}: StarButtonProps) {
  const icon = isStar ? <IoStar /> : <IoStarOutline />;

  return (
    <SkillButton onClick={() => onClick(!isStar)}>{icon}</SkillButton>
  );
}