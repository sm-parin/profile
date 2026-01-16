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
    <PageContainer bgColor={bg} className="flex flex-col compContainer gap-y-6">
      <Typography className={text} variant="h3">
        {data.title}
      </Typography>
      <Typography
        className={`${text} whitespace-pre-line leading-relaxed`}
        variant="p2"
      >
        {data.summary}
      </Typography>
      <Button
        isText
        label={data.secondaryCta}
        onClick={() => navigate("/about#contact")}
        className="italic"
      />
      <div className="flex flex-col gap-4 border-l-6 border-800">
        {description.map((line: string, index: number) => (
          <Typography className={`${text} pl-3`} variant="p3">
            {line}
          </Typography>
        ))}
      </div>

      <Button
        label={data.primaryCta}
        onClick={() => navigate("/work")}
        className="mt-3"
      />
    </PageContainer>
  );
};

export default HomeExperience;
