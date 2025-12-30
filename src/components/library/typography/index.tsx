import React from "react";
import { ITypographyProps } from "./typography.model";

const Typography = ({ variant, children }: ITypographyProps) => {
  const Markup = variant.startsWith("p") ? "p" : variant;
  return <Markup>{children}</Markup>;
};

export default Typography;
