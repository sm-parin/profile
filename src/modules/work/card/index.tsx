import React, { useMemo, useState } from "react";
import Typography from "../../../components/library/typography";
import { useNavigate } from "react-router-dom";
import { applyTheme } from "../../../utils/functions/theme";
import useMediaQuery from "../../../hooks/useMediaQuery";

const WorkCard = ({ data, isActive, index, route, theme }: any) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const navigate = useNavigate();
  const { isDesktop, isTablet, isTabletOnly } = useMediaQuery();

  const cardClass =
    isActive && isDesktop
      ? "col-span-2 row-span-2"
      : isActive && isTabletOnly
      ? "col-span-2 row-span-1"
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

  const cardNumber = isActive && isDesktop ? positionMap[index + 1] : "";

  const roles: string[] = data?.content?.map((item: any) => item.role);

  const { bg, text } = applyTheme(theme?.[1], theme?.[0]);

  return (
    <div
      className={`${cardClass} ${cardNumber} ${bg} p-4 ${
        isCardHovered ? "cursor-pointer" : ""
      }`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      onClick={() => navigate(`/work/${route}`)}
    >
      <div className={`${text} flex flex-col gap-1 justify-between h-full`}>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <Typography variant="h6">{data.company}</Typography>
            <div className="flex">
              <Typography markup="span" variant="p3">
                {"0" + data.priority + ". "}
              </Typography>
              <Typography markup="span" variant="p3">
                {data.experience}
              </Typography>
            </div>
          </div>

          {isActive && isTablet && (
            <div className="flex flex-col justify-between items-end gap-1">
              <Typography variant="p3">{data.duration}</Typography>
              <Typography variant="p3">{data.tags.join(", ")}</Typography>
            </div>
          )}
        </div>
        <Typography variant="p2" className={isDesktop ? "" : "truncate"}>{roles.join(", ")}</Typography>
        {isActive || isDesktop && (
          <Typography variant="p3" className={isActive ? "" : "truncate"}>{data.description}</Typography>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
