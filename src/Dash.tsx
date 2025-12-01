import { User, SquareTerminal, Briefcase, Mail, Contact } from "lucide-react";
import { useState } from "preact/hooks";
import { clsx } from "clsx";

import { useWindowStore } from "./store/windowStore";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";

function Dash() {
  const [, setActiveItem] = useState("about");
  const { setWindow, windows, restoreWindow } = useWindowStore();

  const getWindowContent = (id: string) => {
    switch (id) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <nav className="glass-bg glass-border fixed left-0 top-1/2 z-[1000] flex -translate-y-1/2 flex-col gap-1 rounded-r-2xl border p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out md:bottom-2 md:left-1/2 md:top-auto md:-translate-x-1/2 md:translate-y-0 md:flex-row md:rounded-2xl md:p-2">
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        const windowInstance = windows.find((window) => window.id === item.id);
        const isWindowOpen = !!windowInstance;
        const isMinimized = windowInstance?.isMinimized;

        return (
          <button
            key={item.id}
            className={clsx(
              "ease hover-bg relative flex size-12 cursor-pointer flex-col items-center justify-center rounded-lg border-none bg-transparent p-3 transition-all duration-200 hover:scale-110 active:scale-95 md:size-14 md:p-4",
              isWindowOpen && !isMinimized && "active-bg scale-105",
              isMinimized && "active-bg scale-95 opacity-75",
            )}
            title={item.label}
            type="button"
            onClick={() => {
              setActiveItem(item.id);
              if (isMinimized) {
                restoreWindow(item.id);
              } else {
                setWindow({
                  id: item.id,
                  title: item.label,
                  content: getWindowContent(item.id),
                  prevHeight: undefined,
                  prevWidth: undefined,
                  prevX: 100,
                  prevY: 0,
                  isMaximized: false,
                  x: 100,
                  y: 100,
                  width: 1200,
                  height: 720,
                });
              }
            }}
          >
            <IconComponent size={34} />
            <div
              className={clsx(
                "ease absolute right-0 h-4 w-1 rounded-full transition-all duration-200 md:bottom-0 md:right-auto md:h-1 md:w-4",
                isWindowOpen && !isMinimized ? "indicator-bg" : "bg-transparent",
              )}
            />
            {isMinimized && (
              <div className="absolute -bottom-1 -right-1 size-3 rounded-full bg-orange-500 md:-bottom-1 md:-right-1" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

export default Dash;

const menuItems = [
  { id: "about", label: "About", icon: User },
  {
    id: "projects",
    label: "Projects",
    icon: SquareTerminal,
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
  },
  { id: "contact", label: "Contact", icon: Mail },
];
