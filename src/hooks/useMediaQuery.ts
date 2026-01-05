import React from "react";
import { useMediaQuery as useRRMediaQuery } from "react-responsive";

const useMediaQuery = () => {
  const isTablet = useRRMediaQuery({
    query: "(min-width: var(--breakpoint-tablet))",
  });

  const isDesktop = useRRMediaQuery({
    query: "(min-width: var(--breakpoint-desktop))",
  });

  const isMobileOnly = !isTablet && !isDesktop;
  const isTabletOnly = isTablet && !isDesktop;

  return { isMobileOnly, isTabletOnly, isTablet, isDesktop };
};

export default useMediaQuery;
