import { useEffect, useRef, useState } from "react";

export const useScrollNavigation = (roles: string[] = []) => {
  const [activeRole, setActiveRole] = useState<string>("");

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* ---------- Click → scroll ---------- */
  const scrollToRole = (role: string) => {
    setActiveRole(role);

    if (role === roles[0]) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const el = sectionRefs.current[role];

      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  };

  /* ---------- Scroll spy ---------- */
  useEffect(() => {
    if (!roles.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const role = visible.target.getAttribute("data-role");
        if (!role) return;

        setActiveRole(role);
      },
      {
        rootMargin: "-10% 0px -30% 0px",
        threshold: [0.3, 0.6],
      }
    );

    roles.forEach((role) => {
      const el = sectionRefs.current[role];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [roles]);

  /* ---------- Ensure first role is active ---------- */
  useEffect(() => {
    if (!roles.length) return;

    setActiveRole((prev) => prev || roles[0]);
  }, [roles]);

  return {
    activeRole,
    scrollToRole,
    sectionRefs,
  };
};
