import React from "react";
import Typography from "../../../../components/library/typography";
import { IProjectTileProps } from "./tile.model";
import ProgressWithCounter from "../../../../components/progress-counter";
import { applyTheme } from "../../../../utils/functions/theme";

const ProjectTile = ({
  title,
  proficiency,
  children,
  index,
}: IProjectTileProps) => {
  const { text } = applyTheme();
  return (
    <div className={`flex flex-col gap-1 pr-8 ${text}`}>
      <Typography variant="h5">{title}</Typography>
      <ProgressWithCounter percent={proficiency} />
      <Typography variant="p3">{children}</Typography>
    </div>
  );
};

export default ProjectTile;
