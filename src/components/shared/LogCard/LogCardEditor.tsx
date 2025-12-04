import "./LogCard.css";
import "./LogCardEditor.css";
import useSkillIcons from "@/hooks/useSkillIcons";
import useDateFormatter from "@/hooks/useDateFormatter";

interface LogCardEditorProps {
  id?: number;
  skill_id: number;
  category: string;
  created_at?: Date;
  draft?: string;
  setDraft: (str: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
  onDelete?: () => void;
}

export default function LogCardEditor({
  id,
  skill_id,
  category,
  created_at,
  draft,
  setDraft,
  onCancel,
  onSubmit,
  onDelete,
}: LogCardEditorProps) {
  const [iconOf] = useSkillIcons();
  const [formatDate] = useDateFormatter();

  const min = 120;
  const max = 800;

  return (
    <div className={category + " log-card"}>
      <div className="log-header">
        <div className="log-header-left">
          <p className="log-card-title">{"Log"}</p>
        </div>

        {created_at && (
          <p className="log-card-date">{formatDate(created_at)}</p>
        )}
      </div>
      <br />
      <textarea
        className="log-description-container"
        placeholder="Write what you learned..."
        value={draft ? draft : ""}
        onChange={(e) => setDraft(e.target.value)}
        rows={3}
        maxLength={max}
      />
      <div className="content-right">{draft ? draft.length : 0}/{max}</div>

      <div className="gap-flex">
        <button className="log-action" onClick={onCancel}>Cancel</button>
        <button  className="log-action"onClick={onSubmit}>Submit</button>
        {onDelete && <button className="log-action" onClick={onDelete}>Delete Log</button>}
      </div>
    </div>
  );
}
