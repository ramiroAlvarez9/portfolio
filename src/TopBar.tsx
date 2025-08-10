import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "preact/hooks";

function TopBar() {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[1001] flex h-8 items-center justify-between glass-bg px-4 text-sm font-medium backdrop-blur-sm transition-all duration-[800ms] ease-in-out md:text-base">
      <div className="flex flex-1 items-center justify-start">
        <span className="select-none">
          {time.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center">
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
          className="ease flex cursor-pointer items-center justify-center rounded-md border-none bg-transparent p-1.5 transition-all duration-300 hover-bg"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => {
            const newTheme = isDark ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
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
