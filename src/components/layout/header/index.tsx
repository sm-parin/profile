import React from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../../utils/context/AppContext";

const Header = () => {
  const { response } = useAppContext();
  return (
    <div>
      <ul className={styles["header-container"]}>
        {Object.keys(response).map((key) => (
          <li key={key}>
            <NavLink to={`/${key}`}>{key.toUpperCase()}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
