import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Animates a number counting up from 0 to `end` once it scrolls into view. */
export default function useCountUp(end, duration = 1800) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let frameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [inView, end, duration]);

  return { ref, count };
}
