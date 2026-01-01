"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FlyingBirdProps {
  flip?: boolean;
  duration?: number;
  delay?: number;
  startY?: number;
  endY?: number;
}

function FlyingBird({
  flip = false,
  duration = 6,
  delay = 0,
  startY = 0.8,
  endY = 0.2,
}: FlyingBirdProps) {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!windowSize) return null;

  // Scale bird size based on screen width
  const scale =
    windowSize.width < 640 ? 0.5 : windowSize.width < 1024 ? 0.75 : 1;
  const birdWidth = 129 * scale;
  const birdHeight = 55 * scale;

  return (
    <motion.div
      style={{ position: "absolute", top: 0, left: 0 }}
      initial={{
        x: flip ? windowSize.width + 50 : -150,
        y: windowSize.height * startY,
        opacity: 1,
      }}
      animate={{
        x: flip ? -150 : windowSize.width + 50,
        y: windowSize.height * endY,
        opacity: 1,
      }}
      transition={{ duration, ease: "linear", delay, repeat: 0 }}
    >
      <svg
        width={birdWidth}
        height={birdHeight}
        viewBox="0 0 129 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={flip ? "scale-x-[-1]" : ""}
        aria-hidden="true"
      >
        <path
          d="M1.6869 0.00473459C5.15567 0.236252 28.7505 3.93654 40.3163 6.71275C51.8802 9.48897 63.9092 25.4477 66.6854 26.1423C69.4616 26.8368 82.8757 25.2162 94.4416 24.2921C106.005 23.366 128.211 36.0895 128.211 36.0895C128.211 40.9474 105.774 33.5448 97.9103 33.0818C90.0447 32.6188 77.7862 35.1635 75.2415 37.2451C72.6968 39.3268 67.841 42.103 63.6777 41.8715C59.5144 41.64 47.7169 33.3133 46.5613 31.6947C45.4037 30.0761 51.4192 29.3815 51.4192 29.3815C51.4192 29.3815 51.4192 29.3815 45.8688 22.442C40.3184 15.5024 28.0579 12.2652 19.9628 10.1835C11.8657 8.09986 -1.78387 -0.226783 1.6869 0.00473459Z"
          fill="#00336B"
        />
        <rect
          y="28.9725"
          width="44.7541"
          height="25.8785"
          rx="12.9393"
          transform="rotate(-10.9708 0 28.9725)"
          fill="#007AFF"
        />
        <circle
          cx="14.7414"
          cy="38.6696"
          r="2.58785"
          transform="rotate(-10.9708 14.7414 38.6696)"
          fill="white"
        />
        <circle
          cx="24.9037"
          cy="36.6997"
          r="2.58785"
          transform="rotate(-10.9708 24.9037 36.6997)"
          fill="white"
        />
        <circle
          cx="35.0658"
          cy="34.7298"
          r="2.58785"
          transform="rotate(-10.9708 35.0658 34.7298)"
          fill="white"
        />
      </svg>
    </motion.div>
  );
}

export function FlyingBirdAnimation() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-30"
      aria-hidden="true"
    >
      {/* Left bird: flies from bottom-left to top-right (lower path) */}
      <FlyingBird duration={3} delay={2} startY={0.75} endY={0.35} />
      {/* Right bird: flies from bottom-right to top-left (upper path) */}
      <FlyingBird flip duration={3} delay={2} startY={0.65} endY={0.25} />
    </div>
  );
}
