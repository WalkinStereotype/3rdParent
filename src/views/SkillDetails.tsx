import { Link, Links, useParams } from "react-router-dom";
import { useSkills, useLogs, useTodos } from "@/hooks/contexts";

import SkillExpanded from "@/components/skillDetail/SkillExpanded";
import ResourceList from "@/components/skillDetail/ResourceList";
import LogCard from "@/components/shared/LogCard";
import BackButton from "@/components/shared/BackButton";

export default function SkillDetails() {
  const { id } = useParams();
  const {
    skills,
    categories,
    reload_skills,
    reload_categories,
    loading: skillsLoading,
  } = useSkills();
  const { logs, find_log, reload_logs, loading: logsLoading } = useLogs();
  const { toggle_todo, loading: todosLoading } = useTodos();

  if (!id) {
    return <p>UNDEFINED</p>;
  }

  const skill_id = Number(id);
  const skill = skills.find((s) => s.id === skill_id);
  if (!skill) {
    return <p>UNDEFINED</p>;
  }

  const log = find_log(skill_id);

  return (
    <div>
      <BackButton to="/skills" />
      <SkillExpanded
        id={skill_id}
        name={skill.name}
        type={skill.category}
        description={skill.description}
      >
        Resources here
      </SkillExpanded>

      <br/>

      {log ? (
        <LogCard
          key={log.id}
          id={log.id}
          skill_id={skill_id}
          category={skill.category}
          created_at={log.created_at}
          description={log.description}
          inSkillDetail
        />
      ) : (
        <Link to="/skills" className="link">Write about it?</Link>
      )}
    </div>
  );
}
