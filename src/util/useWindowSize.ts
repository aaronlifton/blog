import { windowWidth } from "$state/index";

const useWindowSize = () => {
  const resizeObserver = new ResizeObserver((e: ResizeObserverEntry[]) => {
    if (e.length === 0) {
      return;
    }
    const width = e[0].contentRect.width;
    windowWidth.set(width);
  });

  resizeObserver.observe(document.body);
};
export default useWindowSize;
