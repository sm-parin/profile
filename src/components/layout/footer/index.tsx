import React from "react";
import PageContainer from "../page-container";
import Typography from "../../library/typography";
import { applyTheme } from "../../../utils/functions/theme";

const Footer = () => {
  const theme = "dark";
  const { bg, text } = applyTheme(theme);
  return (
    <PageContainer bgColor={bg} className="h-12">
      <Typography variant="p3" className={text}>
        Footer
      </Typography>
    </PageContainer>
  );
};

export default Footer;
