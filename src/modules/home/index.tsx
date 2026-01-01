import React from "react";
import { IHomeProps } from "./home.model";
import HomeHero from "./hero";
import HomeExperience from "./experience";
import { useAppContext } from "../../utils/context/AppContext";
import HomeConcepts from "./concepts";

const Home = ({ title = "Home" }: IHomeProps) => {
  const { data } = useAppContext();

  if (!data) return null;

  return (
    <div>
      <HomeHero data={data.hero} />
      <HomeConcepts data={data.concepts} />
      <HomeExperience data={data.experience} />
    </div>
  );
};

export default Home;
