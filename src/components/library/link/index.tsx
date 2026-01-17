import React from "react";
import Button from "../button";
import { FiExternalLink } from "react-icons/fi";

const Link = ({ link, className, btnCls }: any) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`border-800 border-l-4 pl-2 ${className}`}
    >
      <Button isText label={link.name} className={btnCls} icon={<FiExternalLink />} />
    </a>
  );
};

export default Link;
