import React, { useState } from "react";
import ExperienceTile from "./tile";
import Typography from "../../../components/library/typography";
import Button from "../../../components/library/button";
import { IHomeExperienceProps } from "./experience.model";
import PageContainer from "../../../components/layout/page-container";
import { applyTheme } from "../../../utils/functions/theme";

const HomeExperience = ({ data }: IHomeExperienceProps) => {
  const theme = "light";
  const { bg, text } = applyTheme(theme);

  if (!data) return null;

  return (
    <PageContainer bgColor={bg}>
      <Typography className={text} variant="h2">
        {data.title}
      </Typography>
      <Typography className={text} variant="p2">
        {data.title}
      </Typography>
      <div className="flex items-center">
        <Button theme={theme} label={data.primaryCta} />
        <Button theme={theme} isText label={data.secondaryCta} />
      </div>
    </PageContainer>
  );
};

export default HomeExperience;
