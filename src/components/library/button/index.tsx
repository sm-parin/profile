import React from "react";
import { IButtonProps } from "./button.model";
import styles from "./button.module.scss";

const Button = ({ label, onClick = () => {}, className  = ""}: IButtonProps) => {
  return (
    <button className={`${styles["button"]} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;