import "./SkillList.css";

import SkillCard from "@/components/shared/SkillCard";

interface SkillListProps {
  
}

export default function SkillList(){
  return(
    <div className="skill-list">
      <SkillCard title="Sewing a button" type="home">buttons</SkillCard>
      <SkillCard title="Replacing a tire" type="car">buttons</SkillCard>
    </div>
  );
}