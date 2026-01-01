import React from "react";
import ProjectTile from "./tile";
import { IHomeConceptsProps } from "./concepts.model";

const HomeConcepts = ({ data }: IHomeConceptsProps) => {
  if (!data) return null;

  return (
    <div>
      <div className="flex justify-between">
        <p>{data.title}</p>
        <button>{data.cta}</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data.content.map((concept: any) => (
          <ProjectTile
            key={concept.title}
            title={concept.title}
            proficiency={concept.proficiency}
          >
            {concept.description}
          </ProjectTile>
        ))}
      </div>
    </div>
  );
};

export default HomeConcepts;
