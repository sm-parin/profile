import React from "react";
import AboutMe from "./me";
import AboutSkills from "./skills";
import AboutContact from "./contact";
import PageContainer from "../../components/layout/page-container";
import Typography from "../../components/library/typography";
import SectionalLayout from "../../components/layout/sectional-layout";

const AboutLeftSection = () => {
  return <div>Image</div>;
};

const AboutRightSection = () => {
  return (
    <div>
      <Typography variant="p3">About</Typography>
      <Typography variant="p3">Education</Typography>
      <Typography variant="p3">Skills</Typography>
      <Typography variant="p3">Certifications</Typography>
      <Typography variant="p3">More about me</Typography>
      <Typography variant="p3">Contact me</Typography>
    </div>
  );
};

const About = () => {
  return (
    <SectionalLayout
      leftSection={<AboutLeftSection />}
      rightSection={<AboutRightSection />}
    />
  );
};

export default About;
