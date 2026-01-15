import React from "react";
import Typography from "../../../../components/library/typography";
import { applyTheme } from "../../../../utils/functions/theme";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const WorkRole = ({ data, index }: any) => {
  const { text } = applyTheme();
  const { isTablet } = useMediaQuery();
  const { bg: bgI, text: textI } = applyTheme(true);

  if (!data) return;

  return (
    <div
      id={data.role}
      className={`flex flex-col border-b gap-6 ${text} ${!isTablet && index === 0 ? "py-10" : "compContainer"}`}
    >
      <Typography variant="h3">{data.role}</Typography>

      <div className="flex gap-2 flex-wrap">
        {data.skills.map((skill: string, idx: number) => (
          <Typography
            variant="p4"
            className={`${bgI} ${textI} px-4 py-1 rounded-full`}
            key={idx}
          >
            {skill}
          </Typography>
        ))}
      </div>
      <div>
        <ul className="flex flex-col gap-2 my-1">
          {data.responsibilities.map((responsibility: any, index: number) => (
            <li className="list-disc ml-8" key={index}>
              <Typography variant="p3">{responsibility}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Typography variant="p2">Supporting Documents</Typography>
      </div>
    </div>
  );
};

export default WorkRole;
