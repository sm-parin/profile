import { useEffect, useMemo, useState } from "react";
import WorkCard from "./card";
import { shuffleCompanies, sortCompanies } from "../../utils/functions/helper";
import styles from "./work.module.scss";
import { applyTheme, TTheme } from "../../utils/functions/theme";
import { work } from "../../data/experience/work";
import useMediaQuery from "../../hooks/useMediaQuery";

const Work = ({ data }: any) => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const { isMobileOnly, isTablet } = useMediaQuery();

  const shuffledCompanies = useMemo(() => {
    return shuffleCompanies(data);
  }, [data]);

  const sortedCompanies = useMemo(() => {
    return sortCompanies(data);
  }, [data]);

  useEffect(() => {
    if (isMobileOnly) return;
    const interval = setInterval(() => {
      setActiveCard((prev) =>
        prev >= Object.keys(data).length ? 1 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  type ThemeConfig = [TTheme, boolean];

  const THEME_MAP: Record<string, ThemeConfig> = {
    Professional: ["light", true],
    Internship: ["light", false],
    Volunteer: ["default", false],
  };

  const { bg } = applyTheme();
  const { border } = applyTheme(true, "default");

  return (
    <div
      className={`grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-5 desktop:grid-cols-4 desktop:grid-rows-3 grid-flow-dense ${
        isTablet ? "displayContainer" : ""
      } ${bg}`}
    >
      {Object.entries(isTablet ? shuffledCompanies : sortedCompanies).map(
        ([key, company], index) => (
          <WorkCard
            index={index}
            key={key}
            route={key}
            data={company}
            isActive={company.priority === activeCard}
            theme={THEME_MAP[company.experience]}
          />
        )
      )}
    </div>
  );
};

export default Work;
