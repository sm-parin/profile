import React from "react";
import Typography from "../../../../components/library/typography";
import Paragraph from "../../../../components/library/paragraph";

const AboutBaseLayout = ({ data, children, ref, dataRole }: any) => {
  return (
    <div className="compContainer flex flex-col gap-4">
      <Typography variant="h4" ref={ref} data-role={dataRole}>
        {data.title}
      </Typography>
      <Paragraph data={data.description} />
      {children}
    </div>
  );
};

export default AboutBaseLayout;
