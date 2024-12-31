import React from "react";
import { motion } from "framer-motion";

const Link = ({ children, href }) => {
  return (
    <motion.a
      whileHover="hover"
      initial="rest"
      
      href={href}
      className=" w-full border-border group h-full bg-white text-base hover:bg-black flex items-center justify-center text-sm hover:font-bold relative"
    >
      <motion.div
        variants={{
          
        }}
        transition={{
            duration: 0.56,
            ease: "circOut",
          }}
        className="size-full p-4 px-8 bg-white group-hover:bg-black group-hover:text-white flex items-center justify-start"
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default Link;
