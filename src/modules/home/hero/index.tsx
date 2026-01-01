// ...existing code...
import { TypeAnimation } from "react-type-animation";
import Button from "../../../components/library/button";
import Typography from "../../../components/library/typography";
import styles from "./hero.module.scss";
import { createTypeSequence } from "../../../utils/functions/helper";
import { IHomeHeroProps } from "./hero.model";

const HomeHero = ({ data }: IHomeHeroProps) => {
  if (!data) return null;
  return (
    <div className={styles["hero-container"]}>
      <TypeAnimation
        sequence={createTypeSequence(data.title || ([] as string[]))}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <Typography variant="h4">{data.description}</Typography>
      <div>
        <Button label={data.primaryCta} />
        <Button label={data.secondaryCta} />
      </div>
    </div>
  );
};

export default HomeHero;
// ...existing code...
