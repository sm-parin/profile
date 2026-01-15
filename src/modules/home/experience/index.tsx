import React, { useState } from "react";
import ExperienceTile from "./tile";
import Typography from "../../../components/library/typography";
import Button from "../../../components/library/button";
import { IHomeExperienceProps } from "./experience.model";
import PageContainer from "../../../components/layout/page-container";
import { applyTheme } from "../../../utils/functions/theme";

const HomeExperience = ({ data }: IHomeExperienceProps) => {
  const { bg, text } = applyTheme();

  const description = data.description.split("\n");

  return (
    <PageContainer bgColor={bg} className="flex flex-col pt-20 py-10 gap-y-4">
      <Typography className={text} variant="h3">
        {data.title}
      </Typography>
      {/* <Typography className={`${text} whitespace-pre-line leading-relaxed`} variant="p3">
        {data.description}
      </Typography> */}
      <div className="flex flex-col gap-2">
        {description.map((line: any) => (
          <Typography className={`${text}`} variant="p2">
            {line}
          </Typography>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 tablet:gap-4 desktop:gap-6">
        <Button label={data.primaryCta} />
        <Button isText label={data.secondaryCta} />
      </div>
    </PageContainer>
  );
};

export default HomeExperience;
