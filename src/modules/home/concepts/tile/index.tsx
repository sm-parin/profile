import React from "react";
import Typography from "../../../../components/library/typography";
import { IProjectTileProps } from "./tile.model";
import ProgressWithCounter from "../../../../components/progress-counter";
import styles from "./tile.module.scss";

const ProjectTile = ({
  title,
  proficiency,
  children,
  index,
}: IProjectTileProps) => {
  console.log(index, "index")
  return (
    <div className={`${styles["block"]} ${styles[`block--${index}`]} p-4 gap-4`}>
      <Typography variant="h5">{title}</Typography>
      <ProgressWithCounter percent={proficiency} />
      <Typography variant="p3">{children}</Typography>
    </div>
  );
};

export default ProjectTile;
