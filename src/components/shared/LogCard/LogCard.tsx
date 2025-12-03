import "./LogCard.css";
import useSkillIcons from "@/hooks/useSkillIcons";
import useDateFormatter from "@/hooks/useDateFormatter";

import { Link } from "react-router-dom";

import { IoPencil } from "react-icons/io5";
import EditButton from "../skill-buttons/EditButton";

interface LogCardProps {
  id: number;
  skill_id: number;
  title?: string;
  category: string;
  created_at: Date;
  description: string;
  on_edit: () => void; 
  inSkillDetail?: boolean;
}

export default function LogCard({
  id,
  skill_id,
  title,
  category,
  created_at,
  description,
  on_edit,
  inSkillDetail,
}: LogCardProps) {
  const [iconOf] = useSkillIcons();
  const [formatDate] = useDateFormatter();

  return (
    <div
      className={
        category + (inSkillDetail ? " log-card" : " log-card log-list-element")
      }
    >
      <div className="log-header">
        {inSkillDetail ? (
          <div className="gap-flex">
            <p className="log-card-title">{"Log"}</p>
            <EditButton onClick={on_edit}/>
          </div>
        ) : (
          <div className="gap-flex">
            <div className="icon">{iconOf(category)}</div>
            <Link to={`/skills/${skill_id}`} className="log-card-title log-card-title-link">
              {title}
            </Link>
            <EditButton onClick={on_edit}/>
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
