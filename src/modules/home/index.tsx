import React from "react";
import { IHomeProps } from "./home.model";
import HomeHero from "./hero";
import HomeExperience from "./experience";
import HomeConcepts from "./concepts";

const Home = ({ data }: any) => {
  return (
    <div className="displayContainer">
      <HomeHero data={data.hero} />
      <HomeConcepts data={data.concepts} />
      <HomeExperience data={data.experience} />
    </div>
  );
};

export default Home;
