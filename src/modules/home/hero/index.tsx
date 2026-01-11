// ...existing code...
import { TypeAnimation } from "react-type-animation";
import Button from "../../../components/library/button";
import Typography from "../../../components/library/typography";
import styles from "./hero.module.scss";
import { createTypeSequence } from "../../../utils/functions/helper";
import { IHomeHeroProps } from "./hero.model";
import { useMemo } from "react";
import PageContainer from "../../../components/layout/page-container";
import Marquee from "react-fast-marquee";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { response } from "../../../data/response";
import { applyTheme } from "../../../utils/functions/theme";

const HomeHero = ({ data }: IHomeHeroProps) => {
  const sequence = useMemo(
    () => createTypeSequence(data?.title || ([] as string[])),
    [data?.title]
  );

  const skills = ["React", "TypeScript", "CSS", "JavaScript", "Node.js"];

  const theme = "light";
  const { bg, text, code } = applyTheme(true);


  return (
    <PageContainer bgColor={`${bg}`} className="gap-y-4">
      <div className={`${text}`}>
        <TypeAnimation
          sequence={sequence}
          wrapper="h1"
          speed={50}
          // style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="h1"
        />
        <Typography variant="p2">{data.content}</Typography>
      </div>
      <div>
        <Button label={data.primaryCta} theme={false} />
        <Button
          className="col-span-6"
          label={data.secondaryCta}
          theme={true}
          secondary
        />
      </div>
      <div>
        <Marquee
          autoFill
          gradient
          gradientColor={`var(--color-${code[0]})`}
          gradientWidth={100}
        >
          {skills.map((skill) => (
            // <div className="pl-8">{skill}</div>
            <Typography variant="p3" className={`pl-8 ${text}`}>
              {skill}
            </Typography>
          ))}
        </Marquee>
      </div>
    </PageContainer>
  );
};

export default HomeHero;
