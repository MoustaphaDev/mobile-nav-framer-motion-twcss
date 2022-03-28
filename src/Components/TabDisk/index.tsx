import { motion, Variants } from "framer-motion";
import styles from "./styles.module.scss";

interface TabDiskProps {
  activeIndex: number;
}

// .top { top: -10px; }
// .bottom { bottom: -10px; }
// .left { left: -10px; }

function TabDisk({ activeIndex }: TabDiskProps): JSX.Element {
  const tabDiskVariant: Variants = {
    [`${activeIndex}`]: {
      translateX: `${activeIndex * 112}px`,
    },
  };
  return (
    <motion.div
      className={styles.tabDisk}
      variants={tabDiskVariant}
    ></motion.div>
  );
}

export default TabDisk;
