import { Link, Navigate } from "react-router-dom";
import "./SkillCard.css";
import useSkillIcons from "@/hooks/useSkillIcons";

// import { IoAdd, IoArrowBack, IoLink, IoCheckmark } from "react-icons/io5";

interface SkillCardProps {
  id: number;
  title: string;
  type: string;
  children?: React.ReactNode;
}

export default function SkillCard({ id, title, type, children }: SkillCardProps) {
  const [ iconOf ] = useSkillIcons();
  
  return (
    // <div className={"skill-card " + type}>
      <Link to={`/skills/${id}`} className={"skill-card " + type}>
        <div className="icon">{iconOf(type)}</div>
        <p className="skill-card-title">{title}</p>
        <div className="actions">{children}</div>
      </Link>
    // </div>
  );
}
