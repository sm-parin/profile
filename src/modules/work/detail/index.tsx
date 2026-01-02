import React from "react";
import Typography from "../../../components/library/typography";
import SkillStack from "./role/skill-stack";
import { details } from "../mock";
import WorkRole from "./role";

const WorkDetailPage = () => {
  return (
    <div>
      <div>
        Image
        <Typography variant="h1">{details.company}</Typography>
        <Typography variant="h1">{details.location}</Typography>
        <hr />
        <Typography variant="h1">
          {details.experience} | {details.type}
        </Typography>
        <hr />
        <Typography variant="h1">{details.duration}</Typography>
      </div>
      <div>
        {details.content.map((roleData, index) => (
          <WorkRole key={index} data={roleData} />
        ))}
      </div>
    </div>
  );
};

export default WorkDetailPage;
