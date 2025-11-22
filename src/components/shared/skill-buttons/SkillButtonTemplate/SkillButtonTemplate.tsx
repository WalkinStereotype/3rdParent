import "./SkillButtonTemplate.css";

interface SkillButtonProps {
  onClick: () => void;
  // withText?: boolean;
  children: React.ReactNode;
}

export default function SkillButton({ onClick, children }: SkillButtonProps) {
  return (
    // {"skill-button " + (withText ? "with-text" : "no-text")}
    <button className="skill-button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
