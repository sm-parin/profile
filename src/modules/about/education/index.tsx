import React from "react";
import Typography from "../../../components/library/typography";
import useMediaQuery from "../../../hooks/useMediaQuery";

const AboutEducation = ({ data, ref, dataRole }: any) => {
  const { isDesktop, isTablet } = useMediaQuery();

  return (
    <div className="compContainer flex flex-col gap-4">
      <Typography variant="h4" ref={ref} data-role={dataRole}>
        Education
      </Typography>
      <div className="flex flex-col">
        {data.map((row: any) => (
          <div className="grid grid-cols-8 tablet:grid-cols-10 desktop:grid-cols-12 gap-4 border-b py-4">
            <Typography variant="p3" className="col-span-2">
              {row.type}
            </Typography>
            {/* {isDesktop && (
              <Typography variant="p3" className="col-span-3">
                {row.stream}
              </Typography>
            )} */}
            <Typography variant="p3" className="col-span-6">
              {row.institute}
            </Typography>
            {isTablet && (
              <Typography variant="p3" className="col-span-2">
                {row.year}
              </Typography>
            )}
            {isDesktop && (
              <Typography variant="p3" className="col-span-2">
                {row.grade}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
