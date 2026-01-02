// ...existing code...
import { TypeAnimation } from "react-type-animation";
import Button from "../../../components/library/button";
import Typography from "../../../components/library/typography";
import styles from "./hero.module.scss";
import { createTypeSequence } from "../../../utils/functions/helper";
import { IHomeHeroProps } from "./hero.model";
import { useMemo } from "react";

const HomeHero = ({ data }: IHomeHeroProps) => {
  const sequence = useMemo(
    () => createTypeSequence(data?.title || ([] as string[])),
    [data?.title]
  );

  if (!data) return null;
  
  return (
    <div className={styles["hero-container"]}>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <Typography variant="h4">{data.content}</Typography>
      <div>
        <Button label={data.primaryCta} />
        <Button label={data.secondaryCta} />
      </div>
    </div>
  );
};

export default HomeHero;
