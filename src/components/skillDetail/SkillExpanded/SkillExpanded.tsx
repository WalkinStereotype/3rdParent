import "./SkillExpanded.css";

import useSkillIcons from "@/hooks/useSkillIcons";

interface SkillExpandedProps {
  id: number;
  name: string;
  type: string;
  description: string;
}

export default function SkillExpanded({
  id,
  name,
  type,
  description,
  children
}: React.PropsWithChildren<SkillExpandedProps>) {
  const [ iconOf ] = useSkillIcons();

  return (
    <div className={"skill-expanded " + type}>
      <h2>{name}</h2>
      <div className="type-container">
        <div className="icon">{iconOf(type)}</div>
        <h3>{type}</h3>
      </div>
      <div className="description-block">
        <p>{description}</p>
        <br/>
        {children}
      </div>
    </div>
  );
};
