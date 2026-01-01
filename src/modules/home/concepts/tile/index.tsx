import React from "react";
import Typography from "../../../../components/library/typography";
import { IProjectTileProps } from "./tile.model";

const ProjectTile = ({ title, proficiency, children }: IProjectTileProps) => {
  return (
    <div className="border">
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h4">{proficiency}</Typography>
      <Typography variant="p">{children}</Typography>
    </div>
  );
};

export default ProjectTile;
