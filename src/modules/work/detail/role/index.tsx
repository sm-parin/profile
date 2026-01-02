import React from "react";
import SkillStack from "./skill-stack";
import Typography from "../../../../components/library/typography";

const WorkRole = ({ data }: any) => {
  return (
    <div>
      <Typography variant="h2">{data.role}</Typography>
      <SkillStack title="Tags" stack={data.tags} />
      <div>
        <ul>
          {data.responsibilities.map((responsibility: any, index: number) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <SkillStack title="Skills" stack={data.skills} />
      <SkillStack title="Tools" stack={data.tools} />
      <div>
        <Typography variant="h3">Supporting Documents</Typography>
      </div>
    </div>
  );
};

export default WorkRole;
