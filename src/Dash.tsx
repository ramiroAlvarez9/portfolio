import { User, SquareTerminal, Briefcase, Mail } from "lucide-react";
import { useState } from "preact/hooks";
import clsx from "clsx";

function Dash() {
  const [activeItem, setActiveItem] = useState("about");

  return (
    <nav className="fixed left-0 top-1/2 z-[1000] flex -translate-y-1/2 flex-col gap-1 rounded-r-2xl border glass-bg glass-border p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out md:bottom-2 md:left-1/2 md:top-auto md:-translate-x-1/2 md:translate-y-0 md:flex-row md:rounded-2xl md:p-2">
      {menuItems.map((item) => {
        const IconComponent = item.icon;

        return (
          <button
            key={item.id}
            className={clsx(
              "ease relative flex size-12 cursor-pointer flex-col items-center justify-center rounded-lg border-none bg-transparent p-3 transition-all duration-200 hover:scale-110 hover-bg active:scale-95 md:size-14 md:p-4",
              activeItem === item.id && "scale-105 active-bg",
            )}
            title={item.label}
            type="button"
            onClick={() => {
              setActiveItem(item.id);
              console.log(`Clicked: ${item.id}`);
            }}
          >
            <IconComponent size={34} />
            <div
              className={clsx(
                "ease absolute right-0 h-4 w-1 rounded-full transition-all duration-200 md:bottom-0 md:right-auto md:h-1 md:w-4",
                activeItem === item.id ? "indicator-bg" : "bg-transparent",
              )}
            />
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
