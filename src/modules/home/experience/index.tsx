import React, { useState } from "react";
import ExperienceTile from "./tile";
import Typography from "../../../components/library/typography";
import Button from "../../../components/library/button";
import { IHomeExperienceProps } from "./experience.model";
import PageContainer from "../../../components/layout/page-container";
import { applyTheme } from "../../../utils/functions/theme";

const HomeExperience = ({ data }: IHomeExperienceProps) => {
  const { bg, text } = applyTheme();

  return (
    <PageContainer bgColor={bg}>
      <Typography className={text} variant="h2">
        {data.title}
      </Typography>
      <Typography className={`${text} whitespace-pre-line`} variant="p2">
        {data.description}
      </Typography>
      <div className="flex items-center">
        <Button label={data.primaryCta} />
        <Button isText label={data.secondaryCta} />
      </div>
    </PageContainer>
  );
};

export default HomeExperience;
