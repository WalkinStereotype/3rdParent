import SkillList from "@/components/skills/SkillList";

import { useSkills } from "@/hooks/contexts/useSkills";

export default function Todos() {
  const { skills, reload_skills } = useSkills();
  return (
    <div>
      <h1>To-do</h1>
      <br />
      <SkillList skills={skills.slice(0, 3)} />
      <h1>Backlog</h1>
      <br />
      <SkillList skills={skills.slice(3, 10)} />
    </div>
  );
}
