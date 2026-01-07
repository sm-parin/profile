import { useEffect, useState } from "react";
import { useMediaQuery as useRRMediaQuery } from "react-responsive";

type ResponsiveSwitch<T> = (mobile: T, tablet: T, desktop: T) => T;

const useMediaQuery = () => {
  const isTablet = useRRMediaQuery({
    minWidth: "768px",
  });

  const isDesktop = useRRMediaQuery({
    minWidth: "1280px",
  });

  const isMobileOnly = !isTablet;
  const isTabletOnly = isTablet && !isDesktop;

  const responsiveSwitch: ResponsiveSwitch<any> = (mobile, tablet, desktop) => {
    if (isDesktop) return desktop;
    if (isTabletOnly) return tablet;
    return mobile;
  };

  const getDevice = () => {
    if (isMobileOnly) return "mobile";
    if (isTabletOnly) return "tablet";
    if (isDesktop) return "desktop";
  };

  console.log("Device:", isMobileOnly, isDesktop, isTablet, isTabletOnly);

  return {
    getDevice,
    responsiveSwitch,
    isMobileOnly,
    isTabletOnly,
    isTablet,
    isDesktop,
  };
};

export default useMediaQuery;
