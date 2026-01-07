import React from "react";
import ProjectTile from "./tile";
import { IHomeConceptsProps } from "./concepts.model";
import Button from "../../../components/library/button";
import { applyTheme } from "../../../utils/functions/theme";
import PageContainer from "../../../components/layout/page-container";
import Typography from "../../../components/library/typography";

const HomeConcepts = ({ data }: IHomeConceptsProps) => {
  if (!data) return null;

  const { bg, text } = applyTheme();

  return (
    <PageContainer bgColor={bg}>
      <div className="flex justify-between">
        <Typography variant="h3" className={`${text}`}>
          {data.title}
        </Typography>
        <Button label={data.cta} isText />
      </div>
      <div className="grid grid-cols-4">
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
