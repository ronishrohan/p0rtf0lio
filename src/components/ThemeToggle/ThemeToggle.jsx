import React from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const current = 0;
  return (
    <div className="h-full w-fit flex border-l border-black flex-col group">
      <Button enabled={current == 0}>
        <Moon height={"50%"}></Moon>
      </Button>
      <div className="h-[1px] w-full bg-black shrink-0"></div>
      <Button enabled={current == 1}>
        <Sun height={"50%"}></Sun>
      </Button>
    </div>
  );
};

const Button = ({ children, enabled }) => {
  return (
    <>
      <button
        className={`h-1/2 aspect-square shrink-0 flex items-center justify-center ${
          enabled ? "bg-black text-white" : "hover:bg-black hover:text-surface"
        } border-border`}
      >
        {children}
      </button>
    </>
  );
};

export default ThemeToggle;
