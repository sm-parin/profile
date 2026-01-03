import React from "react";

const PageContainer = ({ bgColor, bgClassName, className, children }) => {
  return (
    <div className={bgClassName}>
      <div className={className}>{children}</div>
    </div>
  );
};

export default PageContainer;
