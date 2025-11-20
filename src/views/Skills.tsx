import SkillList from "@/components/skills/SkillList";

import { useSkills } from "@/hooks/contexts/useSkills";

export default function Skills() {
  const { skills, reload_skills } = useSkills();
  return (
    <div>
      <h1>Skills</h1>
      <br />
      <SkillList skills={skills}/>
    </div>
  );
}
