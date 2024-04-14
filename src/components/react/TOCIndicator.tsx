import { activeHeading, lastActiveHeading } from "$state/index";
import {
  motion,
  useAnimate,
  // useScroll,
  // useSpring,
  // useTransform,
} from "framer-motion";
import { type FC, useEffect, useRef } from "react";
import { useBreakpoint } from "./hooks/useBreakpoint";
import Styles from "./TOCIndicator.module.css";

const addDepthDataAttributesToUlTree = (
  listEl: HTMLUListElement | HTMLOListElement,
) => {
  // set the depths to the number of parent UL elements
  listEl.setAttribute("data-depth", "0");
  const lis = listEl.querySelectorAll("li");
  for (const li of lis) {
    const parentDepth = li.parentElement?.getAttribute("data-depth") || 0;
    if (!parentDepth) {
      continue;
    }

    const newDepth = Number.parseInt(parentDepth) + 1;
    li.setAttribute("data-depth", newDepth.toString());
  }
};

const CircleIndicator: FC = () => {
  const [indicator, animate] = useAnimate();
  const isMobile = useBreakpoint(768);
  //
  // const { scrollY, scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const indicatorRef = useRef<HTMLDivElement | null>(null);
  const yOffset = useRef(0);

  function getUpperPadding(element: HTMLElement) {
    const style = window.getComputedStyle(element);
    const paddingTop = Number.parseFloat(style.paddingTop) || 0;
    const borderTop = Number.parseFloat(style.borderTopWidth) || 0;
    return paddingTop + borderTop;
  }

  useEffect(() => {
    let height = 0;
    let firstListEl: HTMLOListElement | null = null;
    const fallback = 133;
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const toc = document.querySelector(
      "[data-blog-post-toc-container]",
    ) as HTMLDivElement;

    if (nav && main) {
      const mainUpperPadding = getUpperPadding(main);
      height = nav.getBoundingClientRect().height + mainUpperPadding;
      firstListEl = nav.querySelector("ol");
    }

    if (height && toc) {
      const ballHeight = 13.5;
      const firstHeader = toc.querySelector("a");
      const firstHeaderHeight = firstHeader
        ? Number.parseInt(window.getComputedStyle(firstHeader).lineHeight)
        : 27;

      if (firstHeaderHeight !== undefined) {
        const textOffset = firstHeaderHeight - ballHeight + 2.5;
        yOffset.current = height + textOffset;
      }
    } else {
      yOffset.current = fallback;
    }

    if (firstListEl) {
      addDepthDataAttributesToUlTree(firstListEl);
    }
  }, []);

  if (isMobile) {
    console.log("isMobile");
    return null;
  }

  activeHeading.subscribe((activeHeader): { activeHeader: HTMLLIElement } => {
    // const treeDept = activeHeader?.getAttribute("data-depth");

    if (indicator.current && activeHeader) {
      const { top } = activeHeader.getBoundingClientRect();

      console.log({ top, ytOffset: yOffset.current });
      animate(indicator.current, { y: top - yOffset.current });
      lastActiveHeading.set(activeHeader);
    }
    return { activeHeader: activeHeader as HTMLLIElement };
  });

  return (
    <div className={Styles.wrapper}>
      <motion.div className={Styles.container}>
        <motion.div
          style={{
            willChange: "transform",
          }}
          className={Styles.item}
          ref={indicator}
        />
      </motion.div>
    </div>
  );
};

export default CircleIndicator;
