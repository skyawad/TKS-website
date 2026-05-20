import { useEffect, useState } from "react";
import styles from "./ScrollProgress.module.css";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      setProgress(Math.min(100, Math.max(0, (scrollTop / max) * 100)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.fill} style={{ width: `${progress}%` }} />
    </div>
  );
}
