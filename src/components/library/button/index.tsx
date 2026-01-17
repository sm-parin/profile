import React, { useEffect, useState } from "react";
import { IButtonProps } from "./button.model";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Typography from "../typography";
import { applyTheme } from "../../../utils/functions/theme";
import Icon from "../icon";
import { MdArrowForwardIos } from "react-icons/md";

const BUTTON_CLASSES = {
  mobile: {
    bg: "",
    label: "",
    icon: "",
  },
  tablet: {
    bg: "",
    label: "",
    icon: "",
  },
  desktop: {
    bg: "",
    label: "",
    icon: "",
  },
};

const Button = ({
  theme = null,
  secondary = false,
  isText = false,
  label = "",
  icon = "",
  iconPosition = "end",
  onClick = () => {},
  className = "",
}: IButtonProps) => {
  const { isMobileOnly } = useMediaQuery();
  const { bg, text, border, token } = applyTheme(
    theme !== null ? theme : isText ? false : !secondary,
    "light"
  );

  return (
    <button
      className={`
          group 
          inline-flex items-center justify-center
          gap-2 desktop:gap-2.5
          ${isText ? "" : "px-4 tablet:px-6 desktop:px-8"}
          ${isText ? "" : "py-1.5 tablet:py-2.5 desktop:py-3.5"}
          transition-transform duration-200 ease-out
          hover:-translate-y-0.5
          w-fit h-fit
          ${isText ? "bg-transparent" : bg}
          ${isText ? "" : `border ${border}`}
          ${className}
          ${text}
        `}
      onClick={onClick}
    >
      <Typography variant={isMobileOnly ? "p4" : "p3"} markup="span">
        {label}
      </Typography>

      <Icon
        icon={icon || <MdArrowForwardIos />}
        color={token[1]}
        boxClass={text}
        className={`
            opacity-70
            transition-all duration-200 ease-out
            group-hover:-translate-x-1
            group-hover:opacity-100
          `}
      />
    </button>
  );
};

export default Button;
