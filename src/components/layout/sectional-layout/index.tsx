import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import PageContainer from "../page-container";
import { applyTheme } from "../../../utils/functions/theme";

const SectionalLayout = ({ leftSection, rightSection }: any) => {
  const { isTablet, isTabletOnly } = useMediaQuery();
  const { bg, text } = applyTheme();
  const { bg: bgI, text: textI } = applyTheme(true);

  return isTablet ? (
    <PageContainer
      className={`grid grid-cols-12 displayContainer`}
      bgColor={isTabletOnly ? "wdp-pc-bg" : `${bg}`}
    >
      <div
        className={`${bgI} col-span-12 tablet:col-span-4 compContainer p-4 tablet:pr-4 desktop:p-6 desktop:pr-6 relative`}
      >
        <div className={`${textI} sticky top-20`}>{leftSection}</div>
      </div>
      <div
        className={`${bg} ${text} col-span-12 tablet:col-span-8 tablet:ml-8`}
      >
        {rightSection}
      </div>
    </PageContainer>
  ) : (
    <>
      <PageContainer bgColor={bgI} className={`py-10 ${textI}`}>
        {leftSection}
      </PageContainer>
      <PageContainer bgColor={bg}>{rightSection}</PageContainer>
    </>
  );
};

export default SectionalLayout;
