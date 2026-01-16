import React from "react";
import Button from "../button";

const Link = ({ link, className, btnCls }: any) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`border-800 border-l-4 pl-2 ${className}`}
    >
      <Button isText label={link.name} className={btnCls}></Button>
    </a>
  );
};

export default Link;
