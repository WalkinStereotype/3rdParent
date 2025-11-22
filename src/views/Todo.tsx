import SkillsSection from "@/components/shared/SkillsSection";

import StarButton from "@/components/shared/skill-buttons/StarButton";
import RemoveButton from "@/components/shared/skill-buttons/RemoveButton";

import { useSkills } from "@/hooks/contexts/useSkills";
import { useTodos } from "@/hooks/contexts/useTodos";
import { Skill } from "@/utils/schema";

interface TodoSkill {
  skill: Skill;
  is_priority: boolean;
}

export default function Todos() {
  const { skills, reload_skills, loading: skillsLoading } = useSkills();
  const {
    todos,
    reload_todos,
    toggle_todo,
    update_todo,
    loading: todosLoading,
    max_priority,
  } = useTodos();

  const todosPageLoading = skillsLoading || todosLoading;

  const filteredTodoSkills = todos.map(({ skill_id, is_priority }) => {
    const skillOf = skills.find(({ id }) => id === skill_id);

    return { skill: skillOf, is_priority: is_priority };
  }) as TodoSkill[];

  const prioritySkills = filteredTodoSkills
    .filter((ts) => ts.is_priority)
    .map(({ skill }) => skill);

  const backlogSkills = filteredTodoSkills
    .filter((ts) => !ts.is_priority)
    .map(({ skill }) => skill);

  const priorityLength = prioritySkills.length;
  const backlogLength = backlogSkills.length;

  const safeToggleTodo = (skill_id: number) => {
    toggle_todo
      ? toggle_todo(skill_id)
      : console.error("No toggle-todo function found");
  };

  const safeUpdateTodo = (skill_id: number, is_priority: boolean) => {
    if (!update_todo) {
      console.error("No update-todo function found");
      return;
    }

    if (is_priority && priorityLength >= max_priority) {
      console.log("Cannot go over the max priority limit");
      return;
    }

    update_todo(skill_id, is_priority);
  };

  const renderActions = (s: Skill, isPriority: boolean) => (
    <div className="flex-display">
      <StarButton
        onClick={() => safeUpdateTodo(s.id, !isPriority)}
        isStar={isPriority}
      />
      <RemoveButton onClick={() => safeToggleTodo(s.id)} />
    </div>
  );

  let todoTitle = "To-do (?/?)";
  let backlogTitle = "Backlog (?)";

  if (!todosPageLoading){
    todoTitle = "To-do (" + priorityLength + "/" + max_priority + ")";
    backlogTitle = "Backlog (" + backlogLength + ")";
  }


  return (
    <div>
      <SkillsSection
        title={todoTitle}
        skills={prioritySkills}
        renderActions={(s) => renderActions(s, true)}
        emptyText="Star a backlog skill to prioritize it!"
        loading={todosPageLoading}
      />
      <SkillsSection
        title={backlogTitle}
        skills={backlogSkills}
        renderActions={(s) => renderActions(s, false)}
        emptyText="Bookmark some skills from the Skills page to add it here!"
        loading={todosPageLoading}
      />
    </div>
  );
}
