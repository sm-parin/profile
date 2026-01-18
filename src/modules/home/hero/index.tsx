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
import { useNavigate } from "react-router-dom";
import Paragraph from "../../../components/library/paragraph";

const HomeHero = ({ data }: IHomeHeroProps) => {
  const navigate = useNavigate();

  const sequence = useMemo(
    () => createTypeSequence(data?.title || ([] as string[])),
    [data?.title]
  );

  const { bg, text, code } = applyTheme(true);

  return (
    <PageContainer
      bgColor={`${bg}`}
      className="gap-y-4 
        h-[90vh] tablet:h-[80vh] 
        flex flex-col justify-between"
    >
      <div
        className={`${text} flex flex-col gap-y-4 h-full justify-center tablet:mx-8 desktop:mx-20`}
      >
        <TypeAnimation
          sequence={sequence}
          wrapper="h1"
          speed={50}
          // style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="h1"
        />
        <Typography variant="p1" className="tablet:w-[90%] desktop:w-[80%]">
          {data.content}
        </Typography>
        <div className="mt-8 flex gap-2 tablet:gap-4 desktop:gap-6">
          <Button
            label={data.primaryCta}
            theme={false}
            onClick={() => navigate("/about")}
          />
          <Button
            className="col-span-6"
            label={data.secondaryCta}
            theme={true}
            secondary
          />
        </div>
      </div>

      <div className="py-8">
        <Marquee
          autoFill
          gradient
          gradientColor={`var(--color-${code[0]})`}
          gradientWidth={100}
        >
          {data.skills.map((skill: string) => (
            // <div className="pl-8">{skill}</div>
            <Typography variant="h6" className={`pl-8 ${text}`}>
              {skill}
            </Typography>
          ))}
        </Marquee>
      </div>
    </PageContainer>
  );
};

export default HomeHero;
