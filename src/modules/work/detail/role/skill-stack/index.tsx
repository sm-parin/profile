import Typography from "../../../../../components/library/typography";
import { applyTheme } from "../../../../../utils/functions/theme";
import { ISkillStackProps } from "./skill-stack.model";

const SkillStack = ({ title, stack }: ISkillStackProps) => {
  const stackString = stack.join(", ");
  return (
    <div className={`flex gap-1 border-b`}>
      <Typography variant="p3">{title}:</Typography>
      <div>
        <Typography variant="p3">{stackString}</Typography>
      </div>
    </div>
  );
};

export default SkillStack;
