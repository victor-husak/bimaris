"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: {
    opacity: 1,
    y: 0,
    scale: 0.97,
    filter: "blur(3px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 1,
    y: 0,
    scale: 0.97,
    filter: "blur(3px)",
  },
};

const pageTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const, // Custom cubic bezier for smooth easing
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          ...pageTransition,
          when: "beforeChildren",
        }}
        style={{
          willChange: "opacity, transform, filter",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
