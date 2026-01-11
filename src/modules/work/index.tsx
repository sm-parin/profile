import { useEffect, useMemo, useState } from "react";
import WorkCard from "./card";
import { shuffleCompanies } from "../../utils/functions/helper";
import styles from "./work.module.scss";
import { TTheme } from "../../utils/functions/theme";
import { work } from "../../data/experience/work";
import { useAppContext } from "../../utils/context/AppContext";

const Work = () => {
  const [activeCard, setActiveCard] = useState<number>(1);

  const { data } = useAppContext();
  // const mockLength = Object.keys(data)?.length;

  const shuffledCompanies = useMemo(() => {
    if (!data) return;
    return shuffleCompanies(data);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev >= Object.keys(data).length ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  type ThemeConfig = [TTheme, boolean];

  const THEME_MAP: Record<string, ThemeConfig> = {
    Professional: ["light", true],
    Internship: ["light", false],
    Volunteer: ["default", false],
  };

  if (!data) return;

  return (
    <div
      className={`grid grid-cols-2 grid-rows-6 desktop:grid-cols-4 desktop:grid-rows-3 grid-flow-dense displayContainer`}
    >
      {shuffledCompanies &&
        Object.entries(shuffledCompanies).map(([key, company], index) => (
          <WorkCard
            index={index}
            key={key}
            route={key}
            data={company}
            isActive={company.priority === activeCard}
            theme={THEME_MAP[company.experience]}
          />
        ))}
    </div>
  );
};

export default Work;
