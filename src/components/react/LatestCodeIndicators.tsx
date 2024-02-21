import { useState } from "react";
import clsx from "clsx";

interface Props {
  numCodes: number;
}
const LatestCodeIndicators = ({ numCodes }: Props) => {
  const range = Array.from({ length: numCodes }, (_, i) => i);
  const [currentIndex, setCurrentIndex] = useState(0);
  setInterval(() => {
    setCurrentIndex((currentIndex + 1) % numCodes);
    console.log({ currentIndex })
  }, 5000);
  console.log({ numCodes });
  return (
    <div className="carousel-indicators mt-6 flex gap-2 place-self-center">
      {Array.from({ length: numCodes }, (_, i) => (
        <div
          className={clsx(
            "indicator flex h-2 w-2 items-center justify-center rounded-full bg-amethyst-200",
            { "bg-red": i === currentIndex },
          )}
          aria-current={i === currentIndex}
          aria-label={`Code sample ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default LatestCodeIndicators;
