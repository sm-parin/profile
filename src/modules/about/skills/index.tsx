import React from "react";
import styles from "./skills.module.scss";
import Marquee from "react-fast-marquee";

const AboutSkills = () => {
  const skills = ["React", "TypeScript", "CSS", "JavaScript", "Node.js"];

  return (
    <>
      <Marquee autoFill gradient speed={20}>
        {skills.map((skill) => (
          <div className="pl-8">{skill}</div>
        ))}
      </Marquee>
      <Marquee autoFill gradient direction="right">
        {skills.map((skill) => (
          <div className="pl-8">{skill}</div>
        ))}
      </Marquee>
      <Marquee autoFill gradient>
        {skills.map((skill) => (
          <div className="pl-8">{skill}</div>
        ))}
      </Marquee>
      <Marquee autoFill gradient direction="right">
        {skills.map((skill) => (
          <div className="pl-8">{skill}</div>
        ))}
      </Marquee>
    </>
  );
};

export default AboutSkills;
