import React from "react";
import Typography from "../../../components/library/typography";
import WorkRole from "./role";
import PageContainer from "../../../components/layout/page-container";
import { applyTheme } from "../../../utils/functions/theme";
import NavigationChip from "../../../components/navigation-chip";
import { useScrollNavigation } from "../../../hooks/useScrollNavigation";
import { useAppContext } from "../../../utils/context/AppContext";
import useMediaQuery from "../../../hooks/useMediaQuery";
import SectionalLayout from "../../../components/layout/sectional-layout";

const WdpLeftSection = ({ data, roles, activeRole, scrollToRole }: any) => {
  const { bg, text } = applyTheme(true);
  // const { isTablet } = useMediaQuery();

  return (
    <div className={`${bg} p-4 relative`}>
      <div className={`${text} sticky top-0`}>
        <Typography variant="p2">{data.company}</Typography>
        <Typography variant="p2">{data.location}</Typography>
        <Typography variant="p2">
          {data.experience} | {data.type}
        </Typography>
        <Typography variant="p2">{data.duration}</Typography>

        {/* {isTablet &&
          roles.length > 1 &&
          roles.map((role: string) => (
            <NavigationChip
              key={role}
              role={role}
              isActive={role === activeRole}
              onClick={scrollToRole}
            />
          ))} */}
      </div>
    </div>
  );
};

const WdpRightSection = ({ data, sectionRefs }: any) => {
  const { bg, text } = applyTheme();

  return (
    <div className={`${bg} ${text}`}>
      {data &&
        data?.content?.map((roleData: any) => (
          <section
            key={roleData.role}
            // ref={(el) => {
            //   sectionRefs.current[roleData.role] = el;
            // }}
            // data-role={roleData.role}
          >
            <WorkRole data={roleData} />
          </section>
        ))}
    </div>
  );
};

const WorkDetailPage = () => {
  const { data } = useAppContext();
  // const roles: string[] = data?.content?.map((item: any) => item.role) ?? [];

  // const { activeRole, scrollToRole, sectionRefs } = useScrollNavigation(roles);

  if (!data) return null;

  return (
    <SectionalLayout
      leftSection={
        <WdpLeftSection
          data={data}
          // scrollToRole={scrollToRole}
          // activeRole={activeRole}
          // roles={roles}
        />
      }
      rightSection={
        <WdpRightSection
          data={data}
          // sectionRefs={sectionRefs}
        />
      }
    />
  );
};

export default WorkDetailPage;
