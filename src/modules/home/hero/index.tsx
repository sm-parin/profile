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

const HomeHero = ({ data }: IHomeHeroProps) => {
  const sequence = useMemo(
    () => createTypeSequence(data?.title || ([] as string[])),
    [data?.title]
  );

  const skills = ["React", "TypeScript", "CSS", "JavaScript", "Node.js"];

  const { responsiveSwitch } = useMediaQuery();
  const temp = responsiveSwitch(10, 20, 30);

  if (!data) return null;

  return (
    <PageContainer bgColor="bg-700" className="gap-y-4">
      <div className="col-span-9">
        <TypeAnimation
          sequence={sequence}
          wrapper="h1"
          speed={50}
          // style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="h1"
        />
        <Typography variant="h4">{data.content}</Typography>
      </div>
      <div className="col-span-4 grid grid-cols-12">
        <Button className="col-span-6" label={data.primaryCta} />
        <Button className="col-span-6" label={data.secondaryCta} />
      </div>
      <div className="col-span-12">
        <Marquee
          autoFill
          gradient
          gradientColor="var(--color-700)"
          gradientWidth={100}
        >
          {skills.map((skill) => (
            <div className="pl-8">{skill}</div>
          ))}
        </Marquee>
      </div>
    </PageContainer>
  );
};

export default HomeHero;
