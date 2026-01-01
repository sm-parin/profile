import React from "react";
import ProjectTile from "./tile";

const HomeProjects = () => {
  return (
    <div>
      <div className="flex justify-between">
        <p>What I Offer</p>
        <button>View All Projects</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProjectTile title="Products" proficiency={7}>
          Building responsive and user-friendly web applications using modern
          technologies.
        </ProjectTile>
        <ProjectTile title="Programs" proficiency={5}>
          Building responsive and user-friendly web applications using modern
          technologies.
        </ProjectTile>
        <ProjectTile title="Pixels" proficiency={3}>
          Building responsive and user-friendly web applications using modern
          technologies.
        </ProjectTile>
        <ProjectTile title="People" proficiency={7}>
          Building responsive and user-friendly web applications using modern
          technologies.
        </ProjectTile>
      </div>
    </div>
  );
};

export default HomeProjects;
