import "./SkillList.css";

import SkillCard from "@/components/shared/SkillCard";
import { Skill } from "@/utils/schema";

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps){
  return(
    <div className="skill-list">
      <SkillCard title="Sewing a button" type="home">buttons</SkillCard>
      <SkillCard title="Replacing a tire" type="car">buttons</SkillCard>
      {skills.map((s) => <SkillCard title={s.name} type={s.category}>buttons</SkillCard>)}
    </div>
  );
}