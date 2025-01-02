import React, { useMemo, useState } from "react";
import { Asterisk } from "lucide-react";
import { motion } from "framer-motion";

const TextRandom = () => {
  return (
    <>
      <RandomPop>FRONTEND</RandomPop>
      <div class="size-full flex items-center justify-center *:size-1/6">
        <Asterisk></Asterisk>
      </div>
      <RandomPop>DEVELOPER</RandomPop>
    </>
  );
};

const RandomPop = ({ children }) => {
    const [key, setKey] = useState(0);
    const directions = useMemo(() => {
    return children.split("").map(() => {
      const direction = Math.floor(Math.random() * 8);
      switch (direction) {
        case 0:
          return { x: "100%", y: "0" }; // right
        case 1:
          return { x: "-100%", y: "0" }; // left
        case 2:
          return { x: "0", y: "100%" }; // down
        case 3:
          return { x: "0", y: "-100%" }; // up
        case 4, 5, 6, 7: 
            return { x: "0", y: "0" }; // no movement
        default:
          return { x: "0", y: "0" };
      }
    });
  }, [children, key]);

  

  return (
    <motion.div onMouseEnter={() => setKey(key + 1)} whileHover="hover" initial="rest" className="flex select-none">
      {children.split("").map((char, index) => (
        <div
          key={index}
          className="relative overflow-hidden w-fit tracking-tighter"
        >
          <motion.div
            variants={{
              hover: directions[index],
            }}
            transition={{
              duration: 0.4,
              ease: [0.83, 0, 0.17, 1],
            }}
          >
            <div>{char}</div>
            <div className="absolute left-0 top-0 size-full">
              <div className="translate-x-full absolute">{char}</div>
              <div className="translate-y-full absolute">{char}</div>
              <div className="-translate-x-full absolute">{char}</div>
              <div className="-translate-y-full absolute">{char}</div>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default TextRandom;
