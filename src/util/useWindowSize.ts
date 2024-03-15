import { windowWidth } from "$state/windowState";

const useWindowSize = () => {
  window?.addEventListener("resize", () => {
    windowWidth.set(window?.innerWidth);
  });
};
export default useWindowSize;
