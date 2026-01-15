import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PageContainer from "../page-container";
import { applyTheme } from "../../../utils/functions/theme";
import Typography from "../../library/typography";

const Header = ({ data }: any) => {
  const { bg, text, border } = applyTheme(true);
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <PageContainer
      bgColor={bg}
      className="h-12 tablet:h-15 desktop:h-18 flex justify-end items-center"
    >
      <ul className="flex">
        {Object.keys(data).map((route, index) => {
          const last = Object.keys(data).length - 1;
          const path = route === "home" ? "/" : `/${route}`;
          const isActive = currentPath === path;

          return (
            <li
              key={route}
              className={`
                  ${text}
                  capitalize
                  px-4
                  hover:underline
                  border-r
                  ${last === index ? "border-none pr-0" : ""}
                  ${border}
                `}
            >
              <Typography
                variant="p1"
                className={`${isActive ? "border-b" : ""} ${border}`}
              >
                <NavLink to={path}>{route}</NavLink>
              </Typography>
            </li>
          );
        })}
      </ul>
    </PageContainer>
  );
};

export default Header;
