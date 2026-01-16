import React from "react";
import Typography from "../../../../components/library/typography";
import { applyTheme } from "../../../../utils/functions/theme";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import Button from "../../../../components/library/button";
import Link from "../../../../components/library/link";

const WorkRole = ({ data, index, key, ref, dataRole }: any) => {
  const { text } = applyTheme();
  const { isTablet } = useMediaQuery();
  const { bg: bgI, text: textI } = applyTheme(true);

  if (!data) return;

  return (
    <div
      key={key}
      className={`flex flex-col border-b gap-6 ${text} ${!isTablet && index === 0 ? "py-10" : "compContainer"}`}
    >
      <Typography variant="h3" ref={ref} data-role={dataRole}>
        {data.role}
      </Typography>

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
      <div className="flex flex-col gap-2">
        <Typography variant="p2">Supporting Documents</Typography>
        {data.documents.map((doc: any) => (
          <Link link={doc} />
        ))}
      </div>
    </div>
  );
};

export default WorkRole;
