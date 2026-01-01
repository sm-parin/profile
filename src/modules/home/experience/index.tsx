import React, { useState } from "react";
import ExperienceTile from "./tile";
import Typography from "../../../components/library/typography";
import Button from "../../../components/library/button";
import { IHomeExperienceProps } from "./experience.model";

const HomeExperience = ({ data }: IHomeExperienceProps) => {
  const [gridColsClass, setGridColsClass] = useState<string>("grid-cols-3");

  const resizeGrid = (isHovered: boolean) => {
    setGridColsClass(isHovered ? "grid-cols-4" : "grid-cols-3");
  };

  if (!data) return null;

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Typography variant="h2">{data.title}</Typography>
          <Button label={data.secondaryCta} />
        </div>
        <Button label={data.primaryCta} />
      </div>
      <div className={`grid ${gridColsClass} gap-4 items-center`}>
        {data.content.map((experience: any) => (
          <ExperienceTile
            key={experience.title}
            title={experience.title}
            description={experience.description}
            onHover={resizeGrid}
            primaryCta={experience.cta}
          />
        ))}
      </div>
    </>
  );
};

export default HomeExperience;
