import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Icon = ({
  color = "#252B37",
  size = "",
  className = "",
  style,
  attr,
  icon,
  boxClass,
  url,
}: any) => {
  const [iconSize, setIconSize] = useState(size);
  const { isMobileOnly, isTabletOnly, isDesktop } = useMediaQuery();

  useEffect(() => {
    if (!size) {
      if (isMobileOnly) setIconSize("1rem");
      else if (isTabletOnly) setIconSize("1.25rem");
      else if (isDesktop) setIconSize("1.5rem");
    }
  }, [size, isMobileOnly, isTabletOnly, isDesktop]);

  return (
    <IconContext.Provider value={{ color, size: iconSize, className, style, attr }}>
      <a
        className={`${boxClass} ${url ? "hover:cursor-pointer" : ""}`}
        href={url}
      >
        {icon}
      </a>
    </IconContext.Provider>
  );
};

export default Icon;
