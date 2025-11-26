import "./LogCard.css";
import useSkillIcons from "@/hooks/useSkillIcons";

import { IoPencil } from "react-icons/io5";

interface LogCardProps {
  id: number;
  skill_id: number;
  title: string;
  category: string;
  created_at: Date;
  description: string;
}

export default function LogCard({
  id,
  skill_id,
  title,
  category,
  created_at,
  description,
}: LogCardProps) {
  const [iconOf] = useSkillIcons();

  return (
    <div className={"log-card " + category}>
      <div className="log-header">
        <div className="log-header-left">
          <div className="icon">{iconOf(category)}</div>
          <p className="log-card-title">{title}</p>
          {/* <div className="icon"><IoPencil/></div> */}
        </div>
        <p className="log-card-date">07/16/25</p>
      </div>
      <br />
      <div className="log-description-container">
        <p>{description}</p>
      </div>
    </div>
  );
};