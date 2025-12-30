import React from "react";
import Button from "../../../components/library/button";
import Typography from "../../../components/library/typography";

const HomeHero = () => {
  return (
    <div className="">
      <Typography variant="h1">Parin. Products. Pixels. Programs.</Typography>
      <Typography variant="h4">My Content</Typography>
      <div>
        <Button label="About" />
        <Button label="Resume" />
      </div>
    </div>
  );
};

export default HomeHero;
