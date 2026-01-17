import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PageContainer from "../page-container";
import { applyTheme } from "../../../utils/functions/theme";
import Typography from "../../library/typography";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { FaHome } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";


const Header = ({ data }: any) => {
  const { bg, text, border } = applyTheme(true);
  const location = useLocation();

  const currentPath = location.pathname.split("/")[1];

  const { isMobileOnly } = useMediaQuery();
  const ICONS: any = {
    home: <FaHome />,
    about: <RiAccountPinCircleFill />,
    work: <MdWorkHistory />,
  }

  return (
    <PageContainer
      bgColor={bg}
      className="h-12 tablet:h-15 desktop:h-18 flex justify-end items-center"
    >
      <ul className="flex">
        {Object.keys(data).map((route, index) => {
          const last = Object.keys(data).length - 1;
          const path = route === "home" ? "" : `${route}`;
          const isActive = currentPath === path;

          return (
            <li
              key={route}
              className={`
                  ${text}
                  capitalize
                  px-4
                  group
                  border-r
                  ${last === index ? "border-none pr-0" : ""}
                  ${border}
                `}
            >
              <Typography
                variant="p1"
                className={`${isActive ? "border-b" : ""} ${border} group-hover:border-b ${isMobileOnly ? "py-0.5" : ""}`}
              >
                <NavLink to={path}>{isMobileOnly ? ICONS[route] : route}</NavLink>
              </Typography>
            </li>
          );
        })}
      </ul>
    </PageContainer>
  );
};

export default Header;
