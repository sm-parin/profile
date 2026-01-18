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
      }) as Record<number, string>,
    []
  );

  const cardNumber = isActive && isDesktop ? positionMap[index + 1] : "";

  const roles: string[] = data?.content?.map((item: any) => item.role);

  const { bg, text, border } = applyTheme(theme?.[1], theme?.[0]);
  const {
    bg: bgI,
    text: textI,
    border: borderI,
  } = applyTheme(!theme?.[1], theme?.[0]);

  const CHIP_BORDERS: any = {
    Professional: "border-800",
    Internship: "border-200",
    Volunteer: "border-25",
  };

  return (
    <div
      className={`${cardClass} ${cardNumber}
      ${data.experience === "Professional" ? `${bg} m-0.5 p-1` : " bg-200 p-0.5"}
      ${isCardHovered ? "cursor-pointer" : ""}`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      onClick={() => navigate(`/work/${route}`)}
    >
      <div
        className={`${text} ${bg} flex flex-col gap-4 desktop:gap-8 justify-between h-full ${data.experience === "Professional" ? "border-200" : "border-800"} border p-4`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Typography variant="h6">{data.company}</Typography>
            <div className="flex gap-1 italic">
              <Typography markup="span" variant="p3">
                {"0" + data.priority + "."}
              </Typography>
              <Typography markup="span" variant="p3">
                {data.experience}
              </Typography>
            </div>
            {isDesktop && isActive && (
              <RoleListInWorkCard roles={roles} className="mt-3" />
            )}
          </div>

          {/* {isActive && isTablet && (
            <div className="flex flex-col justify-end items-end gap-1">
              <Typography variant="p3">{data.tags.join(", ")}</Typography>
              <Typography variant="p4" className="italic">
                {data.duration}
              </Typography>
            </div>
          )} */}
        </div>

        {((isDesktop && !isActive) || !isDesktop) && (
          <RoleListInWorkCard roles={roles} />
        )}

        {isActive && isDesktop && (
          <div
            className={`${isActive ? "h-full flex flex-col justify-between" : ""}`}
          >
            <Typography variant="p3" className={isActive ? "" : "line-clamp-2"}>
              {data.description}
            </Typography>
            {/* <Typography variant="p2" className={isActive ? "" : "line-clamp-2"}>
              {data.skills.join(", ")}
            </Typography> */}
          </div>
        )}

        {isDesktop && isActive && (
          <div className="flex gap-2 flex-wrap">
            {data.tags.map((tag: string, idx: number) => (
              <div className={`${bgI} ${textI} p-1`} key={idx}>
                <Typography
                  variant="p3"
                  className={`px-2 ${CHIP_BORDERS[data.experience]} border-l-4`}
                >
                  {tag}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkCard;

export const RoleListInWorkCard = ({
  roles,
  className = "",
}: {
  roles: string[];
  className?: string;
}) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Typography
      variant="p2"
      className={`${isDesktop ? "" : "truncate"} ${className}`}
    >
      {roles.join(", ")}
    </Typography>
  );
};
