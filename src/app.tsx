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
        {windows
          .filter((window) => !window.isMinimized)
          .map((window) => (
            <Window key={window.id} window={window} />
          ))}
      </div>
      <Dash />
    </>
  );
}
