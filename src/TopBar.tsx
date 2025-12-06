import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "preact/hooks";

function TopBar() {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="glass-bg flex h-8 items-center justify-between px-4 text-sm font-medium backdrop-blur-md shadow-sm transition-all duration-[800ms] ease-in-out md:text-base">
      <div className="hidden xl:flex xl:flex-1 xl:items-center xl:justify-start">
        <span className="select-none">
          {time.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      <div className="flex items-center justify-center xl:flex-1">
        <span className="select-none">
          {time.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-end">
        <button
          className="ease hover-bg flex cursor-pointer items-center justify-center rounded-md border-none bg-transparent p-1.5 transition-all duration-300"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => {
            const newTheme = isDark ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            setIsDark(!isDark);
          }}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}

export default TopBar;
