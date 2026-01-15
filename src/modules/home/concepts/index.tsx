import React from "react";
import ProjectTile from "./tile";
import { IHomeConceptsProps } from "./concepts.model";
import Button from "../../../components/library/button";
import { applyTheme } from "../../../utils/functions/theme";
import PageContainer from "../../../components/layout/page-container";
import Typography from "../../../components/library/typography";

const HomeConcepts = ({ data }: IHomeConceptsProps) => {

  const { bg, text } = applyTheme();

  return (
    <PageContainer bgColor={`${bg} compContainer flex flex-col`}>
      <div className="flex flex-col justify-between gap-y-4">
        <Typography variant="h3" className={`${text}`}>
          {data.title}
        </Typography>
        <Typography variant="p2" className={`${text}`}>
          {data.description}
        </Typography>
      </div>
      <div className="grid grid-cols-1 mt-12 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
        {data.content.map((concept: any, index: number) => (
          <ProjectTile
            index={index}
            key={concept.title}
            title={concept.title}
            proficiency={concept.proficiency}
          >
            {concept.description}
          </ProjectTile>
        ))}
      </div>
    </PageContainer>
  );
};

export default HomeConcepts;
