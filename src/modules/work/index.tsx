import { useEffect, useMemo, useState } from "react";
import { mock } from "./mock";
import WorkCard from "./card";
import { shuffleCompanies } from "../../utils/functions/helper";
import styles from "./work.module.scss";

const Work = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const mockLength = Object.keys(mock).length;

  const shuffledCompanies = useMemo(() => {
    return shuffleCompanies(mock);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev >= mockLength ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [mockLength]);

  const THEME_MAP: Record<string, string> = {
    Professional: "dark",
    Internship: "light",
    Volunteer: "default",
  };

  return (
    <div
      className={`grid grid-cols-4 grid-rows-3 grid-flow-dense ${styles["container"]}`}
    >
      {Object.entries(shuffledCompanies).map(([key, company], index) => (
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
