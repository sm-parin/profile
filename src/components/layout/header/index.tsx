import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../../../utils/context/AppContext";
import PageContainer from "../page-container";
import { applyTheme, TTheme } from "../../../utils/functions/theme";
import Typography from "../../library/typography";

const Header = () => {
  const { response } = useAppContext();
  const location = useLocation();
  const [theme, setTheme] = useState<TTheme>("light");

  useEffect(() => {
    setTheme(location.pathname === "/home" ? "dark" : "light");
  }, [location.pathname]);

  const { bg, text } = applyTheme(theme);

  return (
    <PageContainer bgColor={bg} className="h-18 flex justify-end items-center">
      <ul className="flex flex-row gap-4 justify-end">
        {Object.keys(response).map((key) => (
          <Typography variant="p1" key={key} className={`${text} capitalize`}>
            <NavLink to={`/${key}`}>{key}</NavLink>
          </Typography>
        ))}
      </ul>
    </PageContainer>
  );
};

export default Header;
