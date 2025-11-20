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
    <div className={"skill-card " + type} onClick={() => console.log('click!')}>
      <div className="icon">{iconOf(type)}</div>
      <p className="skill-card-title">{title}</p>
      <div className="actions">{children}</div>
    </div>
  );
}
