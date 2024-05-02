import { useDimensions } from "$components/react/hooks/useDimensions.ts";
import IconButton from "$components/react/IconButton";
import { menuItems } from "$util/menu.ts";
import { motion, sync, useCycle } from "framer-motion";
import { SquareMenu } from "lucide-react";
import { useRef } from "react";
import Styles from "./HamburgerMenu.module.css";
import { Menu } from "./Menu";

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
  let isActive = currentPathname.startsWith(menuItemPathname);

  if (menuItemPathname === rootPathname) {
    isActive = currentPathname === menuItemPathname;
  }

  if (`${currentPathname}/` === rootPathname) {
    isActive = `${currentPathname}/` === menuItemPathname;
  }

  return isActive;
};
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    width: "300px",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    width: "40px",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 40 - 0,
      damping: 40,
    },
  },
};

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <IconButton
    className={Styles.hamburgerToggleBtn}
    data-hamburger-btn
    data-a11y-dialog-show="sidenav"
    variant="menu"
  >
    <SquareMenu width={32} height={32} />
  </IconButton>
);
interface Props {
  currentPathname: string;
}
export const HamburgerMenu: React.FC<Props> = ({ currentPathname }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={Styles.hamburgerNav}
    >
      <motion.div className={Styles.background} variants={sidebar} />
      <Menu currentPathname={currentPathname} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
