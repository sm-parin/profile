import { FaReact } from "react-icons/fa";

const props = {
  size: "3rem",
  color: "var(--color-800)",
};

export const skills = {
  title: "Skills",
  content: [
    {
      title: "Tech Stack",
      skills: [<FaReact {...props} />, "Skill 2", "Skill 3"],
    },
    {
      title: "Type 1",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
    },
    {
      title: "Type 1",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
    },
  ],
};
