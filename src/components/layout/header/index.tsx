import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import PageContainer from "../page-container";
import { applyTheme, TTheme } from "../../../utils/functions/theme";
import Typography from "../../library/typography";
import { response } from "../../../data/response";

const Header = ({ data }: any) => {
  const { bg, text } = applyTheme(true);

  return (
    <PageContainer
      bgColor={bg}
      className="h-12 tablet:h-15 desktop:h-18 flex justify-end items-center"
    >
      <ul className="flex flex-row gap-4 justify-end">
        {Object.keys(data).map((key) => (
          <Typography variant="p1" key={key} className={`${text} capitalize`}>
            <NavLink to={`/${key === "home" ? "" : key}`}>{key}</NavLink>
          </Typography>
        ))}
      </ul>
    </PageContainer>
  );
};

export default Header;
