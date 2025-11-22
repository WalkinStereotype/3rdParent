import { Skill } from "@/utils/schema";

import SkillList from "./SkillList";

interface SkillsSectionProps {
  title: string;
  skills: Skill[];
  renderActions?: (s: Skill) => React.ReactNode;
  emptyText?: string;
  loading?: boolean;
}

export default function SkillsSection({
  title,
  skills,
  renderActions,
  emptyText,
  loading,
}: SkillsSectionProps) {
  if (loading) {
    return (
      <div>
        <h1>{title}</h1>
        <br />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <br />
      {skills.length === 0 ? (
        emptyText && (
          <div>
            <p className="empty-text">{emptyText}</p>
            <br />
          </div>
        )
      ) : (
        <SkillList skills={skills} renderActions={renderActions} />
      )}
    </div>
  );
}
