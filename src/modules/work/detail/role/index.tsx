import React from "react";
import SkillStack from "./skill-stack";
import Typography from "../../../../components/library/typography";
import { applyTheme } from "../../../../utils/functions/theme";

const WorkRole = ({ data }: any) => {
  const { text } = applyTheme();

  if (!data) return;

  return (
    <div id={data.role} className={`flex flex-col gap-4 ${text}`}>
      <Typography variant="h4">{data.role}</Typography>
      <SkillStack title="Skills" stack={data.skills} />

      {/* <SkillStack title="Tags" stack={data.tags} /> */}
      <div>
        <ul className="flex flex-col gap-2">
          {data.responsibilities.map((responsibility: any, index: number) => (
            <li className="list-disc ml-8" key={index}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
      <SkillStack title="Tools" stack={data.tools} />
      <div>
        <Typography variant="p1" className="mb-50">
          Supporting Documents
        </Typography>
      </div>
    </div>
  );
};

export default WorkRole;
