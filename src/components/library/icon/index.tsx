import React from "react";
import { IconContext } from "react-icons";

const Icon = ({
  color = "#252B37",
  size = "1.125rem",
  className = "",
  style,
  attr,
  icon,
  boxClass,
  url,
}: any) => {
  return (
    <IconContext.Provider value={{ color, size, className, style, attr }}>
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
