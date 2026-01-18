import React, { useEffect } from "react";
import Typography from "../../components/library/typography";
import SectionalLayout from "../../components/layout/sectional-layout";
import AboutBaseLayout from "./layouts/base";
import AboutEducation from "./education";
import Link from "../../components/library/link";
import Button from "../../components/library/button";
import { useScrollNavigation } from "../../hooks/useScrollNavigation";
import NavigationChip from "../../components/navigation-chip";
import { getHashFromUrl } from "../../utils/functions/helper";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const AboutLeftSection = ({
  data,
  sections,
  activeRole,
  scrollToRole,
}: any) => {
  const { isTablet } = useMediaQuery();
  return (
    <div className="flex flex-col gap-12">
      <div>
        <Typography variant="p2">Hey Visitor! This is</Typography>
        {/* <div className="flex gap-1 items-end"> */}
        <Typography variant="h1" className="my-1">
          Parin.
        </Typography>
        <Typography variant="p2">Glad to make your acquaintance.</Typography>
      </div>
      {/* </div> */}
      {isTablet && (
        <div>
          {sections.map((section: string) => (
            <NavigationChip
              key={section}
              role={section}
              isActive={section === activeRole}
              onClick={scrollToRole}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AboutRightSection = ({ data, sectionRefs }: any) => {
  return (
    <div>
      <AboutBaseLayout
        data={data.me}
        ref={(el: any) => (sectionRefs.current["me"] = el)}
        dataRole="me"
      />

      <AboutEducation
        data={data.education}
        ref={(el: any) => (sectionRefs.current["education"] = el)}
        dataRole="education"
      />

      {/* <Typography variant="p3">Skills</Typography> */}

      <div className="compContainer flex flex-col gap-4">
        <Typography
          variant="h4"
          ref={(el: any) => (sectionRefs.current["skills"] = el)}
          data-role="skills"
        >
          {data.skills.title}
        </Typography>
        {data.skills.content.map((skillSet: any) => (
          <div className="flex flex-col gap-2">
            <Typography variant="h6">{skillSet.title}</Typography>
            <div className="flex gap-2">
              {skillSet.skills.map((skill: string) => (
                <Typography variant="p3">{skill}</Typography>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="compContainer flex flex-col gap-4">
        <Typography
          variant="h4"
          ref={(el: any) => (sectionRefs.current["certifications"] = el)}
          data-role="certifications"
        >
          {data.certifications.title}
        </Typography>
        <div className="flex flex-col">
          {data.certifications.content.map((cert: any) => (
            <div className="border-b py-4">
              <Link link={cert} />
            </div>
          ))}
        </div>
      </div>

      <AboutBaseLayout
        data={data.interests}
        ref={(el: any) => (sectionRefs.current["interests"] = el)}
        dataRole="interests"
      />

      <AboutBaseLayout
        data={data.contact}
        ref={(el: any) => (sectionRefs.current["contact"] = el)}
        dataRole="contact"
      >
        <Button label="Say Hello!" className="mt-8" />
      </AboutBaseLayout>
    </div>
  );
};

const About = ({ data }: any) => {
  const sections = Object.keys(data);
  const navigate = useNavigate();
  const location = useLocation();

  const threshold = {
    rootMargin: "-10% 0px -50% 0px",
    threshold: [0.3, 0.6],
  };

  const { activeRole, scrollToRole, sectionRefs } = useScrollNavigation(
    sections,
    threshold
  );

  useEffect(() => {
    const hash = getHashFromUrl();
    if (hash && sections.includes(hash)) {
      scrollToRole(hash);
    }
    navigate(location.pathname + location.search, { replace: true });
  }, []);

  return (
    <SectionalLayout
      leftSection={
        <AboutLeftSection
          data={data}
          sections={sections}
          scrollToRole={scrollToRole}
          activeRole={activeRole}
        />
      }
      rightSection={<AboutRightSection data={data} sectionRefs={sectionRefs} />}
    />
  );
};

export default About;
