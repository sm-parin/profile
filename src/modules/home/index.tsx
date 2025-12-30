import React from "react";
import { IHomeProps } from "./home.model";
import Hero from "./hero";

const Home = ({ title = "Home" }: IHomeProps) => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
