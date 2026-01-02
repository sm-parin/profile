import Typography from "../../../../../components/library/typography";
import { ISkillStackProps } from "./skill-stack.model";

const SkillStack = ({ title, stack }: ISkillStackProps) => {
  const stackString = stack.join(", ");
  return (
    <div>
      <Typography variant="p">{title}:</Typography>
      <div>
        <Typography variant="p">{stackString}.</Typography>
      </div>
    </div>
  );
};

export default SkillStack;
