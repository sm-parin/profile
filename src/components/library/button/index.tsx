import React from "react";
import { IButtonProps } from "./button.model";

const Button = ({ label, onClick = () => {}, className  = ""}: IButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
