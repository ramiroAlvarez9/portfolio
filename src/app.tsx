import Dash from "./Dash";
import TopBar from "./TopBar";
import { useWindowStore } from "./store/windowStore";
import { Window } from "./components/Window";

export function App() {
  const { windows } = useWindowStore();

  return (
    <>
      <TopBar />
      <div className="h-[calc(100vh-2rem)] w-full">
        {windows.map((window) => {
          return (
            <div
              key={window.id}
              className={`transition-[opacity,transform] duration-300 ease-in-out ${
                window.isMinimized
                  ? "pointer-events-none translate-y-full scale-0 opacity-0"
                  : "translate-y-0 scale-100 opacity-100"
              }`}
            >
              <Window window={window}>{window.title}</Window>
            </div>
          );
        })}
      </div>
      <Dash />
    </>
  );
}
