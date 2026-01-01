import { LOREM_IPSUM } from "../utils/constants/variables";

export const response = {
  home: {
    sectionId: "home",
    hero: {
      title: ["Parin SM", "Products", "Pixels", "Programs", "People"],
      content: LOREM_IPSUM,
      primaryCta: "About",
      secondaryCta: "Resume",
    },
    concepts: {
      title: "Projects",
      cta: "View All Projects",
      content: [
        {
          title: "Products",
          proficiency: 7,
          description: LOREM_IPSUM,
        },
        {
          title: "Programs",
          proficiency: 5,
          description: LOREM_IPSUM,
        },
        {
          title: "Pixels",
          proficiency: 3,
          description: LOREM_IPSUM,
        },
        {
          title: "People",
          proficiency: 7,
          description: LOREM_IPSUM,
        },
      ],
    },
    experience: {
      title: "Experience",
      primaryCta: "View All Experience",
      secondaryCta: "Let's Build Together",
      content: [
        {
          title: "Professional Experience",
          description: LOREM_IPSUM,
          cta: "View",
        },
        {
          title: "Professional Experience",
          description: LOREM_IPSUM,
          cta: "View",
        },
        {
          title: "Professional Experience",
          description: LOREM_IPSUM,
          cta: "View",
        },
      ],
    },
  },
  work: {
    sectionId: "work",
  },
  projects: {
    sectionId: "projects",
  },
  about: {
    sectionId: "about",
  },
  contact: {
    sectionId: "contact",
  },
};
