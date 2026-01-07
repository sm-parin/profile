import React from "react";
import Typography from "../../../components/library/typography";
import { details } from "../mock";
import WorkRole from "./role";
import PageContainer from "../../../components/layout/page-container";

const WorkDetailPage = () => {
  return (
    <PageContainer className="grid grid-cols-12">
      <div className="col-span-4">
        Image
        <Typography variant="p2">{details.company}</Typography>
        <Typography variant="p2">{details.location}</Typography>
        <hr />
        <Typography variant="p2">
          {details.experience} | {details.type}
        </Typography>
        <hr />
        <Typography variant="p2">{details.duration}</Typography>
      </div>
      <div className="col-span-8">
        {details.content.map((roleData, index) => (
          <WorkRole key={index} data={roleData} />
        ))}
      </div>
    </PageContainer>
  );
};

export default WorkDetailPage;
