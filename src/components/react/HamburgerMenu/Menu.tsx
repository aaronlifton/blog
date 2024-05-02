import { menuItems } from "$util/menu";
import { motion } from "framer-motion";
import type { default as React } from "react";
import Styles from "./HamburgerMenu.module.css";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Menu: React.FC<{ currentPathname: string }> = ({ currentPathname }) => (
  <motion.ul variants={variants} className={Styles.hamburgerList}>
    {items(currentPathname)}
  </motion.ul>
);

type IsActiveMenuItemOptions = {
  currentPathname: string;
  menuItemPathname: string;
  rootPathname: string;
};

export const isActiveMenuItem = ({
  currentPathname,
  menuItemPathname,
  rootPathname,
}: IsActiveMenuItemOptions) => {
  if (!currentPathname) {
    return false;
  }

  let isActive = currentPathname.startsWith(menuItemPathname);

  if (menuItemPathname === rootPathname) {
    isActive = currentPathname === menuItemPathname;
  }

  if (`${currentPathname}/` === rootPathname) {
    isActive = `${currentPathname}/` === menuItemPathname;
  }

  return isActive;
};

const items = (currentPathname: string) =>
  menuItems.map((item, idx) => {
    const isActive = isActiveMenuItem({
      currentPathname,
      menuItemPathname: item.pathname,
      rootPathname: "/",
    });

    return (
      <MenuItem i={idx} key={item.name} isActive={isActive}>
        {item.name}
      </MenuItem>
    );
  });

// const itemIds = [0, 1, 2, 3, 4];
//       <nav
//         className="flex flex-col w-full translate-y-[-9px]"
//         aria-label="Main navigation"
//       >
//         <ul className="flex overflow-y-auto flex-col justify-center items-center p-3 w-full h-full list-none bg-purple-50 bg-amethyst-100/75 border-amethyst-300/55 px-horizontal-padding">
//           {menuItems.map((item) => {
//             const isActive = isActiveMenuItem({
//               currentPathname,
//               menuItemPathname: item.pathname,
//               rootPathname: "/",
//             });
//
//             return (
//               <li key={item.name} className="mb-2 w-full shadow-sm shadow-gray-200 border-[1px]">
//                 <a
//                   className="text-md text-gray-800 not-prose block w-full bg-[var(--on-primary)] px-4 py-2 transition-colors duration-75 ease-[cubic-bezier(0.94, 0, 0.2, 1)] hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200 bg-gray-100"
//                   href={item.pathname}
//                   color={isActive ? "primary" : "secondary"}
//                   {...(isActive && { "aria-current": "page" })}
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
