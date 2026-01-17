import React, { useEffect } from "react";
import Typography from "../../../components/library/typography";
import WorkRole from "./role";
import PageContainer from "../../../components/layout/page-container";
import { applyTheme } from "../../../utils/functions/theme";
import NavigationChip from "../../../components/navigation-chip";
import { useScrollNavigation } from "../../../hooks/useScrollNavigation";
import useMediaQuery from "../../../hooks/useMediaQuery";
import SectionalLayout from "../../../components/layout/sectional-layout";
import { useNavigate, useParams } from "react-router-dom";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiNewBorn } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";
import { VscRemote } from "react-icons/vsc";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { RiHome9Fill } from "react-icons/ri";
import Icon from "../../../components/library/icon";

const WdpLeftSection = ({ data, roles, activeRole, scrollToRole }: any) => {
  const { bg: bgI, text: textI } = applyTheme(true);
  const { bg, text } = applyTheme();

  const { isTablet } = useMediaQuery();

  const ICONS: any = {
    Professional: <BsPersonWorkspace />,
    Internship: <GiNewBorn />,
    Volunteer: <MdVolunteerActivism />,
    Remote: <RiHome9Fill />,
    "On-Site": <PiBuildingOfficeFill />,
    "Hybrid": <VscRemote /> ,
  }

  return (
    <div className={`${bgI} relative`}>
      <div className={`${textI} sticky top-0 flex flex-col gap-4 tablet:gap-8`}>
        <div className="flex flex-col gap-2">
          <Typography variant="h3">{data.company}</Typography>
          <div className="flex gap-8 flex-wrap">
            <div className={`${bgI} ${textI} flex gap-2 items-center`}>
              <Icon icon={ICONS[data.experience]} color={"var(--2oo)"} />
              <Typography variant="p3" className="">
                {data.experience}
              </Typography>
            </div>
            <div className={`${bgI} ${textI} flex gap-2 items-center`}>
              <Icon icon={ICONS[data.type]} color={"var(--2oo)"} />
              <Typography variant="p3" className="">
                {data.type}
              </Typography>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-4 tablet:gap-2"> */}
        <div className="flex flex-row justify-between items-center tablet:flex-col tablet:justify-start tablet:items-start italic">
          <Typography variant="p4">{data.duration}</Typography>
          {data.location && (
            <Typography variant="p4">{data.location}</Typography>
          )}
        </div>
        {/* </div> */}

        <div className="flex gap-2 flex-wrap">
          {data.tags.map((tag: string, idx: number) => (
            <div className={`${bg} ${text} p-1`} key={idx}>
              <Typography variant="p3" className="px-2 border-800 border-l-4">
                {tag}
              </Typography>
            </div>
          ))}
        </div>

        {isTablet && (
          <div>
            {roles.length > 1 &&
              roles.map((role: string) => (
                <NavigationChip
                  key={role}
                  role={role}
                  isActive={role === activeRole}
                  onClick={scrollToRole}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

const WdpRightSection = ({ data, sectionRefs }: any) => {
  const { bg, text } = applyTheme();

  return (
    <div className={`${bg} ${text}`}>
      {data &&
        data?.content?.map((roleData: any, index: number) => (
          <WorkRole
            data={roleData}
            index={index}
            key={roleData.role}
            ref={(el: any) => {
              sectionRefs.current[roleData.role] = el;
            }}
            dataRole={roleData.role}
          />
        ))}
    </div>
  );
};

const WorkDetailPage = ({ response }: any) => {
  const { workId } = useParams<{ workId: string }>();
  const navigate = useNavigate();

  let data;

  if (!workId || !response[workId]) {
    navigate("/");
  } else {
    data = response[workId];
  }
  const roles: string[] = data?.content?.map((item: any) => item.role) ?? [];

  const threshold = {
    rootMargin: "-10% 0px -30% 0px",
    threshold: [0.3, 0.6],
  };

  const { activeRole, scrollToRole, sectionRefs } = useScrollNavigation(roles, threshold);

  return (
    <SectionalLayout
      leftSection={
        <WdpLeftSection
          data={data}
          scrollToRole={scrollToRole}
          activeRole={activeRole}
          roles={roles}
        />
      }
      rightSection={<WdpRightSection data={data} sectionRefs={sectionRefs} />}
    />
  );
};

export default WorkDetailPage;
