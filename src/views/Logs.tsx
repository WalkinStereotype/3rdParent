import { useState } from "react";

import { Skill, Log } from "@/utils/schema";
import useDateFormatter from "@/hooks/useDateFormatter";

import { useSkills, useLogs } from "@/hooks/contexts";

interface LogSkill {
  log_id: number;
  skill_id: number;
  skill_name: string;
  category: string;
  log_description: string;
  log_created_at: Date;
  log_updated_at: Date;
}

export default function Logs() {
  const {
    skills,
    categories,
    reload_skills,
    reload_categories,
    loading: skillsLoading,
  } = useSkills();
  const { logs, reload_logs, loading: logsLoading } = useLogs();

  const [formatDate] = useDateFormatter();

  const logsPageLoading = skillsLoading || logsLoading || skills.length == 0;

  const filteredLogSkills: LogSkill[] = logsPageLoading
    ? []
    : (logs.map(({ id, skill_id, description, created_at, updated_at }) => {
        const { name, category } = skills.find(({ id }) => id === skill_id)!;

        return {
          log_id: id,
          skill_id,
          skill_name: name,
          category,
          log_description: description,
          log_created_at: created_at,
          log_updated_at: updated_at,
        };
      }) as LogSkill[]);

  return (
    <div>
      <h2>Logs</h2>
      {logsPageLoading ? (
        <p>Loading</p>
      ) : (
        filteredLogSkills.map((ls) => (
          <div>
            <h3>Skill: {ls.skill_name}</h3>
            <p>Category: {ls.category}</p>
            <br />
            <p>Description: {ls.log_description}</p>
            <br />
          </div>
        ))
      )}
    </div>
  );
}
