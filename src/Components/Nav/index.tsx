import NavItem from "../NavItem";
import TabDisk from "../TabDisk";
import {
  HomeIcon,
  UserIcon,
  ChatAltIcon,
  CameraIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import type { NavItemProps } from "../NavItem";
import { motion } from "framer-motion";

const styles = {
  nav: "bg-white px-10 text-2xl rounded-xl",
  ul: "flex items-center flex-none justify-center relative",
};

const NavItems: NavItemProps[] = [
  {
    Image: HomeIcon,
    title: "Home",
  },
  {
    Image: UserIcon,
    title: "Users",
  },
  {
    Image: ChatAltIcon,
    title: "Messages",
  },
  {
    Image: CameraIcon,
    title: "Images",
  },
  {
    Image: CogIcon,
    title: "Settings",
  },
];

function Nav() {
  const [activeNavItemIndex, setactiveNavItemIndex] = useState(0);
  function navItemClickHandler(idx: number) {
    return () => {
      setactiveNavItemIndex(idx);
    };
  }
  return (
    <nav className={styles.nav}>
      <motion.ul className={styles.ul} animate={`${activeNavItemIndex}`}>
        <TabDisk activeIndex={activeNavItemIndex} />
        {NavItems.map((item: NavItemProps, idx: number) => (
          <NavItem
            key={idx}
            itemIndex={idx}
            onClick={navItemClickHandler(idx)}
            Image={item.Image}
            title={item.title}
          />
        ))}
      </motion.ul>
    </nav>
  );
}

export default Nav;
