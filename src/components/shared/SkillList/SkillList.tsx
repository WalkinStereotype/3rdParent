import "./SkillList.css";

import SkillCard from "@/components/shared/SkillCard";
import { Skill } from "@/utils/schema";

interface SkillListProps {
  skills: Skill[];
  renderActions?: (s: Skill) => React.ReactNode;
}

export default function SkillList({ skills, renderActions }: SkillListProps) {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <SkillCard key={s.id} id={s.id} title={s.name} type={s.category}>
          {renderActions && renderActions(s)}
        </SkillCard>
      ))}
    </div>
  );
}
