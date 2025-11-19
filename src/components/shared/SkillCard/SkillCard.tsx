import "./SkillCard.css";
import useSkillIcons from "@/hooks/useSkillIcons";

// import { IoAdd, IoArrowBack, IoLink, IoCheckmark } from "react-icons/io5";

interface SkillCardProps {
  title: string;
  type: string;
  children?: React.ReactNode;
}

export default function SkillCard({ title, type, children }: SkillCardProps) {
  const [ iconOf ] = useSkillIcons();
  
  return (
    <div className={"skill-card " + type}>
      <div className="icon">{iconOf(type)}</div>
      <h2 className="skill-card-title">{title}</h2>
      <div className="actions">{children}</div>
    </div>
  );
}
