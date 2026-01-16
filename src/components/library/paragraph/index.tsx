import React from "react";
import Typography from "../typography";
import { applyTheme } from "../../../utils/functions/theme";

const Paragraph = ({ data }: { data: string }) => {
  const lines = data.split("\n");
  const { text } = applyTheme();

  return (
    <div className="flex flex-col gap-2">
      {lines.map((line: string, index: number) => (
        <Typography variant="p3" key={index} className={`${text}`}>
          {line}
        </Typography>
      ))}
    </div>
  );
};

export default Paragraph;
