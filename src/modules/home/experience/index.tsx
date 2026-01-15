import React, { useState } from "react";
import ExperienceTile from "./tile";
import Typography from "../../../components/library/typography";
import Button from "../../../components/library/button";
import { IHomeExperienceProps } from "./experience.model";
import PageContainer from "../../../components/layout/page-container";
import { applyTheme } from "../../../utils/functions/theme";
import { useNavigate } from "react-router-dom";

const HomeExperience = ({ data }: IHomeExperienceProps) => {
  const { bg, text } = applyTheme();
  const navigate = useNavigate();

  const description = data.description.split("\n");

  return (
    <PageContainer bgColor={bg} className="flex flex-col compContainer gap-y-4">
      <Typography className={text} variant="h3">
        {data.title}
      </Typography>
      {/* <Typography className={`${text} whitespace-pre-line leading-relaxed`} variant="p3">
        {data.description}
      </Typography> */}
      <div className="flex flex-col gap-2">
        {description.map((line: string, index: number) => (
          <Typography
            className={`${text} ${index === 0 ? "mb-6" : ""}`}
            variant={index === 0 ? "p2" : "p3"}
          >
            {line}
          </Typography>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 tablet:gap-4 desktop:gap-6">
        <Button label={data.primaryCta} onClick={() => navigate("/work")} />
        <Button
          isText
          label={data.secondaryCta}
          onClick={() => navigate("/about#contact")}
        />
      </div>
    </PageContainer>
  );
};

export default HomeExperience;
