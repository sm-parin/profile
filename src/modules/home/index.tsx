import React from "react";
import { IHomeProps } from "./home.model";

const Home = ({ title = "Home" }: IHomeProps) => {
  return <div>{title}</div>;
};

export default Home;
