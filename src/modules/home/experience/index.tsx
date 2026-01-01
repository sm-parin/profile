import React, { useState } from "react";
import ExperienceTile from "./tile";
import Typography from "../../../components/library/typography";
import Button from "../../../components/library/button";

const HomeExperience = () => {
  const [gridColsClass, setGridColsClass] = useState<string>("grid-cols-3");

  const resizeGrid = (isHovered: boolean) => {
    setGridColsClass(isHovered ? "grid-cols-4" : "grid-cols-3");
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Typography variant="h2">Experience</Typography>
          <Button label="Let's Build Together" />
        </div>
        <Button label="View All Experience" />
      </div>
      <div className={`grid ${gridColsClass} gap-4 items-center`}>
        <ExperienceTile
          title="Professional Experience"
          description="Description for experience 1"
          onHover={resizeGrid}
        />
        <ExperienceTile
          title="Internships"
          description="Description for experience 2"
          onHover={resizeGrid}
        />
        <ExperienceTile
          title="Miscellaneous"
          description="Description for experience 3"
          onHover={resizeGrid}
        />
      </div>
    </>
  );
};

export default HomeExperience;
