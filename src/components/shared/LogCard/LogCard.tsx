import "./LogCard.css";
import useSkillIcons from "@/hooks/useSkillIcons";
import useDateFormatter from "@/hooks/useDateFormatter";

import { IoPencil } from "react-icons/io5";

interface LogCardProps {
  id: number;
  skill_id: number;
  title?: string;
  category: string;
  created_at: Date;
  description: string;
  inSkillDetail?: boolean;
}

export default function LogCard({
  id,
  skill_id,
  title,
  category,
  created_at,
  description,
  inSkillDetail,
}: LogCardProps) {
  const [iconOf] = useSkillIcons();
  const [formatDate] = useDateFormatter();

  return (
    <div className={"log-card " + category}>
      <div className="log-header">
        {inSkillDetail ? (
          <div className="log-header-left">
            <p className="log-card-title">{"Log"}</p>
          </div>
        ) : (
          <div className="log-header-left">
            <div className="icon">{iconOf(category)}</div>
            <p className="log-card-title">{title}</p>
          </div>
        )}

        {/* <div className="icon"><IoPencil/></div> */}
        <p className="log-card-date">{formatDate(created_at)}</p>
      </div>
      <br />
      <div className="log-description-container">
        <p>{description}</p>
      </div>
    </div>
  );
}
