import React, { useMemo, useState } from "react";
import Typography from "../../../components/library/typography";
import { useNavigate } from "react-router-dom";

const WorkCard = ({ data, isActive, index, route }: any) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const navigate = useNavigate();

  const cardClass = isActive
    ? "col-span-2 row-span-2"
    : "col-span-1 row-span-1";

  const positionMap = useMemo(
    () =>
      ({
        1: "row-start-1 col-start-1",
        2: "row-start-1 col-start-2",
        3: "row-start-1 col-start-3",
        4: "row-start-2 col-start-1",
        5: "row-start-2 col-start-2",
        6: "row-start-2 col-start-3",
        7: "row-start-2 col-start-1",
        8: "row-start-2 col-start-2",
        9: "row-start-2 col-start-3",
      } as Record<number, string>),
    []
  );

  const cardNumber = isActive ? positionMap[index + 1] : "";

  return (
    <div
      className={`${cardClass} ${cardNumber} border p-4 ${
        isCardHovered ? "cursor-pointer" : ""
      }`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      onClick={() => navigate(`/work/${route}`)}
    >
      <Typography variant="h3">{data.company}</Typography>
      <Typography variant="h3">{data.priority}</Typography>
      <Typography variant="p">{data.duration}</Typography>
      <Typography variant="p">{data.description}</Typography>
    </div>
  );
};

export default WorkCard;
