import React from "react";
import { ITypographyProps } from "./typography.model";

const Typography = ({
  variant,
  markup,
  className = "",
  children,
  ...props
}: ITypographyProps) => {
  const component = markup ? markup : variant.startsWith("p") ? "p" : variant;
  return React.createElement(
    component,
    { className: `${variant} ${className}`, ...props },
    children
  );
};

export default Typography;
