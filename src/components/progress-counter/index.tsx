import { useEffect, useRef, useState } from "react";
import styles from "./progress-counter.module.scss";
import Typography from "../library/typography";
import { applyTheme } from "../../utils/functions/theme";

const ProgressWithCounter = ({ percent }: { percent: number }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 👈 animate when 30% visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Run animation when visible
  useEffect(() => {
    if (!isVisible) {
      // Reset when leaving viewport
      setProgress(0);
      setCount(0);
      return;
    }

    const duration = 1000;
    const startTime = performance.now();

    setProgress(0);
    setCount(0);

    requestAnimationFrame(() => {
      setProgress(percent);

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const ratio = Math.min(elapsed / duration, 1);

        setCount(Math.round(ratio * percent));

        if (ratio < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, [isVisible, percent]);

  const { bg } = applyTheme(true);

  return (
    <div ref={containerRef} className={styles["container"]}>
      <div className={styles["progress"]}>
        <div
          className={`${styles["progress-fill"]} ${bg}`}
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
      <Typography variant="p4">{count}%</Typography>
    </div>
  );
};

export default ProgressWithCounter;
