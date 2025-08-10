import Dash from "./Dash";
import TopBar from "./TopBar";

export function App() {
  return (
    <>
      <TopBar />
      <div className="h-[calc(100vh-2rem)] w-full" />
      <Dash />
    </>
  );
}
