import React from "react";
import Typography from "../../../components/library/typography";
import SkillStack from "./skill-stack";

const WorkDetailPage = () => {
  return (
    <div>
      <div>Image</div>
      <div>
        '<Typography variant="h2">Role</Typography>
        <div>
          <div>
            <Typography variant="p">Company</Typography>
            <Typography variant="p">Location</Typography>
          </div>
          <div>
            <Typography variant="p">Time Range</Typography>
            <Typography variant="p">Work Type</Typography>
          </div>
        </div>
        <SkillStack />
        <div>
          <ul>
            <li>Task 1</li>
            <li>Task 1</li>
            <li>Task 1</li>
          </ul>
        </div>
        <SkillStack />
        <SkillStack />
        <div>
          <Typography variant="h3">Supporting Documents</Typography>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
