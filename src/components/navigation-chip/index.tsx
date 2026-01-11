import { hash } from "../../utils/functions/helper";

const NavigationChip = ({
  role,
  isActive,
  onClick,
}: {
  role: string;
  isActive: boolean;
  onClick: (role: string) => void;
}) => {
  return (
    <a
      href={hash(role)}
      onClick={(e) => {
        e.preventDefault();
        onClick(role);
      }}
      className={`group flex items-center py-3 ${isActive ? "active" : ""}`}
    >
      <span className="nav-indicator mr-4 h-px w-8 bg-200 transition-all motion-reduce:transition-none"></span>
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-200 transition-colors">
        {role}
      </span>
    </a>
  );
};

export default NavigationChip;
