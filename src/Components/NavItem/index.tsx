import { HomeIcon } from "@heroicons/react/outline";
import { motion, Variants } from "framer-motion";

export interface NavItemProps {
  Image: typeof HomeIcon;
  title: string;
  onClick?: React.MouseEventHandler;
  itemIndex?: number;
}

const styles = {
  image: "h-full w-28 text-slate-900 px-8 rounded-full transition-colors z-10",
  imageWrapper: "flex items-center justify-center",
  title: "text-center text-xl",
  titleContainer: "absolute left-0 right-0 -bottom-0 opacity-0",
  navItem: "relative cursor-pointer py-6",
  titleVisualBox: "absolute w-full h-full top-0 left-0 overflow-hidden",
};

function NavItem({
  Image,
  title,
  onClick,
  itemIndex,
}: NavItemProps): JSX.Element {
  const idx = `${itemIndex}`;
  const titleVariant: Variants = {
    [idx]: { opacity: 1, bottom: "10px" },
  };
  const imageVariant: Variants = {
    [idx]: {
      translateY: "-100%",
    },
  };

  // Nice styles for Image
  // hover:bg-gray-200 active:bg-gray-300
  return (
    <div className={styles.navItem} onClick={onClick && onClick}>
      <motion.div className={styles.imageWrapper} variants={imageVariant}>
        <Image className={styles.image} />
      </motion.div>

      <div className={styles.titleVisualBox}>
        <motion.div className={styles.titleContainer} variants={titleVariant}>
          <li className={styles.title}>{title}</li>
        </motion.div>
      </div>
    </div>
  );
}

export default NavItem;
