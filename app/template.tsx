"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: {
    opacity: 0.8,
    y: 0,
    scale: 0.98,
    filter: "blur(2px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0.8,
    y: 0,
    scale: 0.98,
    filter: "blur(2px)",
  },
};

const pageTransition = {
  duration: 1,
  ease: [0.16, 1, 0.3, 1] as const, // Ultra smooth easing curve
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
