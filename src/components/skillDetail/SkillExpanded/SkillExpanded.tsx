import "./SkillExpanded.css";

import useSkillIcons from "@/hooks/useSkillIcons";

import SaveButton from "@/components/shared/skill-buttons/SaveButton";

interface SkillExpandedProps {
  id: number;
  name: string;
  type: string;
  description: string;
  has_log?: boolean;
  is_todo?: boolean;
  on_toggle_todo?: () => void;
}

export default function SkillExpanded({
  id,
  name,
  type,
  description,
  has_log = false,
  is_todo = false,
  on_toggle_todo = () => console.log("No toggle function implemented"),
  children,
}: React.PropsWithChildren<SkillExpandedProps>) {
  const [iconOf] = useSkillIcons();

  return (
    <div className={"skill-expanded " + type}>
      <div className={"skill-expanded-top-row"}>
        <h2>{name}</h2>
        <div className={"skill-expanded-buttons"}>
          {has_log ? (
            <p>Completed</p>
          ) : (
            <SaveButton isPriority={is_todo} onClick={on_toggle_todo} />
          )}
        </div>
      </div>
      <div className="type-container">
        <div className="icon">{iconOf(type)}</div>
        <h3>{type}</h3>
      </div>
      <div className="description-block">
        <p>{description}</p>
        <br />
        {children}
      </div>
    </div>
  );
}
