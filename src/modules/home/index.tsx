import React from "react";
import { IHomeProps } from "./home.model";
import HomeHero from "./hero";
import HomeProjects from "./projects";
import HomeExperience from "./experience";
import HomeAbout from "./about";
import HomeContact from "./contact";

const Home = ({ title = "Home" }: IHomeProps) => {
  return (
    <div>
      <HomeHero />
      <HomeProjects />
      <HomeExperience />
      <div>
        <HomeAbout />
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
