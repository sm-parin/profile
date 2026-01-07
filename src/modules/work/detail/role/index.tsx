import React from "react";
import SkillStack from "./skill-stack";
import Typography from "../../../../components/library/typography";

const WorkRole = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h4">{data.role}</Typography>
      <SkillStack title="Tags" stack={data.tags} />
      <div>
        <ul className="flex flex-col gap-2">
          {data.responsibilities.map((responsibility: any, index: number) => (
            <li className="list-disc ml-8" key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <SkillStack title="Skills" stack={data.skills} />
      <SkillStack title="Tools" stack={data.tools} />
      <div>
        <Typography variant="p1">Supporting Documents</Typography>
      </div>
    </div>
  );
};

export default WorkRole;
