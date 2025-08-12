import { create } from "zustand";

export type WindowData = {
  id: string;
  title: string;
  content?: React.ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  isMinimized?: boolean;
  isMaximized?: boolean;
};

type WindowStore = {
  windows: WindowData[];
  setWindow: (window: WindowData) => void;
  updateWindow: (id: string, updates: Partial<WindowData>) => void;
  deleteWindow: (id: string) => void;
  deleteAllWindows: () => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  setWindow: (window: WindowData) =>
    set((state) => 
      state.windows.some((w) => w.id === window.id)
        ? state
        : { windows: [...state.windows, window] }
    ),

  updateWindow: (id: string, updates: Partial<WindowData>) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, ...updates } : window
      ),
    })),

  deleteWindow: (id: string) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    })),

  deleteAllWindows: () =>
    set(() => ({
      windows: [],
    })),
}));
