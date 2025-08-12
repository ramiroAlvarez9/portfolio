import { type ComponentChildren } from "preact";
import { Rnd } from "react-rnd";

import { useWindowStore, type WindowData } from "../store/windowStore";

type WindowProps = {
  window: WindowData;
  children: ComponentChildren;
};

export function Window({ window, children }: WindowProps) {
  const { deleteWindow, updateWindow } = useWindowStore();

  return (
    <Rnd
      key={window.id}
      className="rounded-lg border border-[var(--glass-border)] bg-[var(--window-bg)] shadow-[var(--shadow-window)]"
      default={{
        x: window.x,
        y: window.y,
        width: window.width,
        height: window.height,
      }}
      dragHandleClassName="gnome-titlebar"
      onDragStop={(e, d) => {
        updateWindow(window.id, { x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateWindow(window.id, {
          x: position.x,
          y: position.y,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
      }}
    >
      <div className="flex h-full flex-col">
        <div className="gnome-titlebar flex h-10 items-center justify-between rounded-t-lg bg-[var(--window-secondary)] px-4">
          <div className="w-16" />
          <div className="text-sm font-medium text-[var(--window-text)]">{window.title}</div>
          <div className="flex items-center space-x-1">
            <button className="flex h-6 w-8 items-center justify-center text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--window-tertiary)]">
              −
            </button>
            <button className="flex size-6 items-center justify-center text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--window-tertiary)]">
              □
            </button>
            <button
              className="flex h-6 w-8 items-center justify-center text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--danger-color)] hover:text-[var(--danger-text)]"
              onClick={() => deleteWindow(window.id)}
            >
              ✕
            </button>
          </div>
        </div>
        <div className="flex-1 p-4 text-[var(--window-text)]">{children}</div>
      </div>
    </Rnd>
  );
}
