import { Rnd } from "react-rnd";

import Dash from "./Dash";
import TopBar from "./TopBar";

export function App() {
  return (
    <>
      <TopBar />
      <div className="h-[calc(100vh-2rem)] w-full">
        <Rnd
          className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--shadow-window)]"
          default={{
            x: 100,
            y: 50,
            width: 600,
            height: 400,
          }}
          dragHandleClassName="gnome-titlebar"
        >
          <div className="flex h-full flex-col">
            <div className="gnome-titlebar flex h-10 items-center justify-between rounded-t-lg bg-[var(--bg-secondary)] px-4">
              <div className="w-16" />
              <div className="text-sm font-medium text-[var(--text-primary)]">Terminal</div>
              <div className="flex items-center space-x-1">
                <button className="flex h-6 w-8 items-center justify-center text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]">
                  −
                </button>
                <button className="flex size-6 items-center justify-center text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]">
                  □
                </button>
                <button className="flex h-6 w-8 items-center justify-center text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--danger-color)] hover:text-[var(--danger-text)]">
                  ✕
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 text-[var(--text-primary)]">Window content here</div>
          </div>
        </Rnd>
      </div>
      <Dash />
    </>
  );
}
