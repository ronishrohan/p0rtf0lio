import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-full w-fit flex border-l border-black flex-col group">
      <motion.div
        initial={{
          backgroundColor: "#f40c3f",
          height: "100%",
          y: ""
        }}
        animate={{
          height: current == 0 ? "100%" : "0%",
          y: ""
        }}
        transition={{
          duration: 0.5,
          ease: [0.83, 0, 0.17, 1],
        }}
        class=" mix-blend-multiply fixed top-0 left-0 z-50 size-full pointer-events-none"
      >
        <motion.div animate={{
          height: current == 1 ? "0px" : "20px"
        }} className="top-full absolute w-full h-[20px] bg-black" ></motion.div>
      </motion.div>
      {/* <Button onClick={() => setCurrent(0)} enabled={current == 0}>
        <Moon height={"50%"}></Moon>
      </Button>
      <div className="h-[1px] w-full bg-black shrink-0"></div>
      <Button onClick={() => setCurrent(1)} enabled={current == 1}>
        <Sun height={"50%"}></Sun>
      </Button> */}
      <div onClick={() => setCurrent(current == 0 ? 1 : 0)} className="h-full cursor-pointer flex flex-col relative">
        <motion.div
          animate={{
            clipPath:
              current == 0
                ? "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)"
                : "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
          }}
          transition={{
            duration: 0.2,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="h-full flex flex-col absolute z-20 pointer-events-none"
        >
          <button className="aspect-square bg-black text-white shrink-0 h-1/2 flex items-center justify-center">
            <Moon></Moon>
          </button>
          <div className="h-[1px] w-full bg-black shrink-0"></div>
          <button className="aspect-square bg-black text-white shrink-0 h-1/2 flex items-center justify-center">
            <Sun></Sun>
          </button>
        </motion.div>
        <button
          // onClick={() => setCurrent(0)}
          className="aspect-square shrink-0 h-1/2 flex items-center justify-center"
        >
          <Moon></Moon>
        </button>
        <div className="h-[1px] w-full bg-black shrink-0"></div>
        <button
          // onClick={() => setCurrent(1)}
          className="aspect-square shrink-0 h-1/2 flex items-center justify-center"
        >
          <Sun></Sun>
        </button>
      </div>
    </div>
  );
};

const Button = ({ children, enabled, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`h-1/2 aspect-square shrink-0 flex items-center justify-center ${
          enabled ? "bg-black text-white" : "hover:bg-black hover:text-surface"
        } border-border transition-colors`}
      >
        {children}
      </button>
    </>
  );
};

export default ThemeToggle;
