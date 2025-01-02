import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(0);
  return (
    <>
      <motion.div
        initial={{
          backgroundColor: "#f40c3f",
          height: "100%",
          y: "",
        }}
        animate={{
          height: theme == 0 ? "100%" : "0%",
          y: "",
        }}
        transition={{
          duration: 0.5,
          ease: [0.83, 0, 0.17, 1],
        }}
        class=" mix-blend-multiply sm:hidden block fixed top-0 left-0 z-[100] size-full pointer-events-none"
      >
        <motion.div
          animate={{
            height: theme == 1 ? "0px" : "20px",
          }}
          className="top-full absolute w-full h-[20px] bg-black"
        ></motion.div>
      </motion.div>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        class={`sm:hidden flex h-full p-4 aspect-square shrink-0 border-l transition-colors border-border ${open ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <div class="h-full w-full flex items-center justify-center overflow-hidden relative">
          <motion.div
            animate={{ y: open ? "-100%" : "0%" }}
            transition={{
              duration: 0.3,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="size-full absolute flex items-center justify-center aspect-square p-4"
          >
            <Menu></Menu>
          </motion.div>
          <motion.div
          initial={{y: "100%"}}
            animate={{ y: open ? "0" : "100%" }}
            transition={{
              duration: 0.3,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="size-full absolute flex items-center justify-center aspect-square p-4"
          >
            <X></X>
          </motion.div>
        </div>
      </button>
      <motion.div
        initial={{
          height: "0vh",
          opacity: 1,
        }}
        animate={{
          height: open ? "400px" : "0vh",
          opacity: open ? 1 : 1,
          borderColor: open ? "#000" : "transparent",
          borderBottomWidth: open ? "1px" : "0px",
        }}
        transition={{
          duration: 0.3,
          ease: [0.83, 0, 0.17, 1],
        }}
        className="fixed top-[80px] left-0 w-full z-40 flex flex-col bg-white border-b  overflow-hidden"
      >
        <NavbarButton>ABOUT</NavbarButton>
        <div className="h-[1px] w-full shrink-0 bg-black"></div>
        <NavbarButton>SKILLS</NavbarButton>
        <div className="h-[1px] w-full shrink-0 bg-black"></div>
        <NavbarButton>WORKS</NavbarButton>
        <div className="h-[1px] w-full shrink-0 bg-black"></div>
        <NavbarButton>CONTACT</NavbarButton>
        <div className="size-full flex h-[80px] border-t border-black">
          <NavbarButton href="https://github.com/ronishrohan">
            <Github></Github>
          </NavbarButton>
          <div className="w-[1px] h-full shrink-0 bg-black"></div>
          <NavbarButton href="https://www.linkedin.com/in/ronishrohan/">
            <Linkedin></Linkedin>
          </NavbarButton>
          <button
            onClick={() => setTheme(theme == 0 ? 1 : 0)}
            className="size-full flex border-l border-black relative"
          >
            <motion.button
              animate={{
                clipPath:
                  theme == 0
                    ? "polygon(0 0, 50% 0, 50% 100%, 0 100%)"
                    : "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
              }}
              transition={{
                duration: 0.3,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="size-full flex border-l border-black absolute top-0 left-0 bg-black text-white pointer-events-none"
            >
              <div className="size-full flex items-center justify-center aspect-square">
                <Moon></Moon>
              </div>
              <div className="size-full flex items-center justify-center aspect-square">
                <Sun></Sun>
              </div>
            </motion.button>
            <div className="size-full flex items-center justify-center aspect-square">
              <Moon></Moon>
            </div>
            <div className="size-full flex items-center justify-center aspect-square">
              <Sun></Sun>
            </div>
          </button>
        </div>
      </motion.div>
    </>
  );
};

const NavbarButton = ({ children, href }) => {
  return (
    <a
      className="h-[80px] w-full flex p-4 justify-start items-center text-2xl hover:bg-black hover:text-white"
      href={href}
    >
      <div className="flex h-fit overflow-hidden">
        <motion.div
          initial={{
            y: "100%",
          }}
          whileInView={{
            y: "0%",
            transition: {
              delay: 0.0,
              duration: 0.6,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          transition={{}}
        >
          {children}
        </motion.div>
      </div>
    </a>
  );
};

export default NavbarMobile;
