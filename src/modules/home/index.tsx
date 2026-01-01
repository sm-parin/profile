import React from "react";
import { IHomeProps } from "./home.model";
import HomeHero from "./hero";
import HomeProjects from "./projects";
import HomeExperience from "./experience";
import { useAppContext } from "../../utils/context/AppContext";

const Home = ({ title = "Home" }: IHomeProps) => {
  const { data } = useAppContext();

  if (!data) return null;

  return (
    <div>
      <HomeHero data={data.hero} />
      <HomeProjects />
      <HomeExperience />
    </div>
  );
};

export default Home;
