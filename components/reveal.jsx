'use client';

import { motion, useReducedMotion } from "framer-motion";

const directionOffset = {
  up: { x: 0, y: 26 },
  down: { x: 0, y: -26 },
  left: { x: 26, y: 0 },
  right: { x: -26, y: 0 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.62,
  direction = "up",
  once = true,
  amount = 0.25,
}) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionOffset[direction] ?? directionOffset.up;

  const initial = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, x: offset.x, y: offset.y };

  const whileInView = shouldReduceMotion
    ? undefined
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
