import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { clipPath } from "framer-motion/client";

const Button = ({ className,hoverClassName, children }) => {
  return (
    <motion.button
      whileHover="hover"
      initial="rest"
      className={twMerge(
        "flex items-center justify-center relative",
        className
      )}
    >
      {children}
      <motion.div variants={{
        hover: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        rest: {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        }
      }}
      transition={{
        duration: 0.3,
        ease: "circInOut",
      }}
      className={twMerge("absolute size-full bottom-0 left-0 flex  bg-primary text-surface", hoverClassName)}>
        {children}
      </motion.div>
    </motion.button>
  );
};

export default Button;
