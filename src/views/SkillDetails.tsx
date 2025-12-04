import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useSkills, useLogs, useTodos } from "@/hooks/contexts";

import { Log } from "@/utils/schema";

import SkillExpanded from "@/components/skillDetail/SkillExpanded";
import ResourceList from "@/components/skillDetail/ResourceList";
import LogCard from "@/components/shared/LogCard";
import LogCardEditor from "@/components/shared/LogCard/LogCardEditor";
import BackButton from "@/components/shared/BackButton";

export default function SkillDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { find_skill, reload_skills, loading: skillsLoading } = useSkills();
  const {
    find_log,
    reload_logs,
    add_log,
    delete_log,
    update_log,
    loading: logsLoading,
  } = useLogs();
  const { toggle_todo, loading: todosLoading } = useTodos();

  const [isWriting, setIsWriting] = useState(false);
  const [draft, setDraft] = useState("");

  const skill_id = id ? Number(id) : undefined;
  const skill = skill_id ? find_skill(skill_id) : undefined;
  const log = skill_id ? find_log(skill_id) : undefined;

  useEffect(() => {
    setIsWriting(searchParams.get("write") === "true");
  }, [searchParams]);

  useEffect(() => {
    if (log) setDraft(log.description);
  }, [log]);

  if (!skill_id || !skill) return <p>UNDEFINED</p>;

  const handleCreateSubmit = () => {
    add_log({ skill_id: skill_id, description: draft });
    navigate(`?write=false`);
  };
  const handleEditSubmit = () => {
    if (!log) return;
    update_log({ log_id: log.id, description: draft });
    navigate(`?write=false`);
  };
  const handleDelete = () => {
    if (!log) return;
    delete_log(log.id);
    navigate(`?write=false`);
  };

  const renderLogArea = (log: Log | undefined, isWriting: boolean) => {
    if (!isWriting) {
      return log ? (
        <LogCard
          key={log.id}
          id={log.id}
          skill_id={skill_id}
          category={skill.category}
          created_at={log.created_at}
          description={log.description}
          on_edit={() => navigate(`?write=true`)}
          inSkillDetail
        />
      ) : (
        <p className="link" onClick={() => navigate(`?write=true`)}>
          Write about it?
        </p>
      );
    }

    return (
      <LogCardEditor
        draft={draft}
        skill_id={skill_id}
        category={skill.category}
        setDraft={setDraft}
        onCancel={() => navigate(".", { replace: true })}
        onSubmit={log ? handleEditSubmit : handleCreateSubmit}
        {...(log && {
          id: log.id,
          draft: draft,
          created_at: log.created_at,
          onDelete: handleDelete,
        })}
      />
    );
  };

  return (
    <div>
      <BackButton to="/skills" />
      <SkillExpanded
        id={skill_id}
        name={skill.name}
        type={skill.category}
        description={skill.description}
        has_log={typeof log !== undefined}
      >
        Resources here
      </SkillExpanded>
      <br />
      {renderLogArea(log, isWriting)}
    </div>
  );
}
