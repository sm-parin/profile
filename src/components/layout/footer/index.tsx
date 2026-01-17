import React from "react";
import PageContainer from "../page-container";
import Typography from "../../library/typography";
import { applyTheme } from "../../../utils/functions/theme";
import Icon from "../../library/icon";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaProjectDiagram } from "react-icons/fa";

const Footer = () => {
  const { bg, text } = applyTheme();
  return (
    <PageContainer
      bgColor={bg}
      className="flex justify-between items-center pt-8 pb-4"
    >
      <div className="flex gap-2">
        <Icon icon={<FaProjectDiagram />} />
        <Typography variant="p5" className={text}>
          Designed and Built by Parin.
        </Typography>
      </div>

      <div className="flex gap-4">
        <Icon icon={<FiGithub />} />
        <Icon icon={<FaLinkedinIn />} />
        <Icon icon={<FaInstagram />} />
      </div>
    </PageContainer>
  );
};

export default Footer;
