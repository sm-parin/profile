import React, { useEffect } from "react";
import Typography from "../../../../components/library/typography";
import Button from "../../../../components/library/button";
import { IExperienceTileProps } from "./tile.model";

const ExperienceTile = ({
  title,
  description,
  primaryCta = "View",
  onHover,
}: IExperienceTileProps) => {
  const [colSpanClass, setColSpanClass] = React.useState<string>("");
  const [isTileHovered, setIsTileHovered] = React.useState<boolean>(false);

  const resizeTile = (isHovered: boolean = true) => {
    setIsTileHovered(isHovered);
  };

  useEffect(() => {
    setColSpanClass(isTileHovered ? "col-span-2" : "");
    onHover && onHover(isTileHovered);
  }, [isTileHovered]);

  return (
    <div
      className={`h-fit border ${colSpanClass}`}
      onMouseEnter={() => resizeTile()}
      onMouseLeave={() => resizeTile(false)}
    >
      <Typography variant="h3">{title}</Typography>
      {isTileHovered && <Typography variant="p">{description}.</Typography>}
      <Button label={primaryCta} />
    </div>
  );
};

export default ExperienceTile;
