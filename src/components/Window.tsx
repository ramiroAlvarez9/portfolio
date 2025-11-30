import { type ComponentChildren } from "preact";
import { Rnd, type Position } from "react-rnd";

import { useWindowStore, type WindowData } from "../store/windowStore";

type WindowProps = {
  window: WindowData;
  children: ComponentChildren;
};

export const getBrowserWindow = () => {
  return globalThis.window;
};

export function Window({ window, children }: WindowProps) {
  const { deleteWindow, minimizeWindow, maximizeWindow, restoreFromMaximize, updateWindow } = useWindowStore();

  const browserWindow = getBrowserWindow();

  return (
    <Rnd
      key={window.id}
      bounds="body"
      className="rounded-lg border border-[var(--glass-border)] bg-[var(--window-bg)] shadow-[var(--shadow-window)]"
      dragHandleClassName="gnome-titlebar"
      minHeight={800}
      minWidth={700}
      position={{ x: window.x, y: window.y }}
      size={{ width: window.width, height: window.height }}
      style={{
        transition:
          window.isMaximized || window.isTransitioning
            ? "width 0.3s ease-in-out, height 0.3s ease-in-out, transform 0.3s ease-in-out"
            : "none",
      }}
      onDragStop={(e, data) => {
        updateWindow(window.id, { x: data.x, y: data.y });
      }}
      onResizeStop={(e, direction, ref, delta, position: Position) => {
        updateWindow(window.id, {
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          x: position.x,
          y: position.y,
        });
      }}
    >
      <div className="flex h-full flex-col">
        <div className="gnome-titlebar flex h-10 items-center justify-between rounded-t-lg bg-[var(--window-secondary)] px-4">
          <div className="w-16" />
          <div className="text-sm font-medium text-[var(--window-text)]">{window.title}</div>
          <div className="flex items-center space-x-1">
            <button
              className="flex h-6 w-8 items-center justify-center text-xs font-bold text-[var(--text-secondary)] lg:hover:bg-[var(--window-tertiary)]"
              onClick={() => minimizeWindow(window.id)}
            >
              −
            </button>
            <button
              className="flex size-6 items-center justify-center text-xs font-bold text-[var(--text-secondary)] lg:hover:bg-[var(--window-tertiary)]"
              onClick={() =>
                window.isMaximized ? restoreFromMaximize(window.id) : maximizeWindow(window.id, browserWindow)
              }
            >
              {window.isMaximized ? "❐" : "□"}
            </button>
            <button
              className="flex h-6 w-8 items-center justify-center text-xs font-bold text-[var(--text-secondary)] lg:hover:bg-[var(--danger-color)] lg:hover:text-[var(--danger-text)]"
              onClick={() => deleteWindow(window.id)}
            >
              ✕
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 text-[var(--window-text)]">{children}</div>
      </div>
    </Rnd>
  );
}
