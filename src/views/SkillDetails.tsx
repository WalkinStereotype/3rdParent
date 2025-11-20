import { Link, useParams } from "react-router-dom";
import { useSkills } from "@/hooks/contexts/useSkills";

import SkillExpanded from "@/components/skillDetail/SkillExpanded";
import ResourceList from "@/components/skillDetail/ResourceList";
import BackButton from "@/components/shared/BackButton";

export default function SkillDetails() {
  const { id } = useParams();
  const { skills } = useSkills();

  if (!id) {
    return <p>UNDEFINED</p>;
  }

  const skill_id = Number(id);
  const skill = skills.find((s) => s.id === skill_id);
  if (!skill) {
    return <p>UNDEFINED</p>;
  }

  return (
    <div>
      <BackButton to="/skills"/>
      <SkillExpanded
        id={skill_id}
        name={skill.name}
        type={skill.category}
        description={skill.description}
      >
        Resources here
      </SkillExpanded>
    </div>
  );
}
