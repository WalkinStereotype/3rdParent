import "./SkillList.css";

import SkillCard from "@/components/shared/SkillCard";
import { Skill } from "@/utils/schema";

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps){
  return(
    <div className="skill-list">
      {skills.map((s) => <SkillCard title={s.name} type={s.category}>buttons</SkillCard>)}
    </div>
  );
}