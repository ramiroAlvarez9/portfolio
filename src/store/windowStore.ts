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
  isTransitioning?: boolean;
  prevX?: number;
  prevY?: number;
  prevWidth?: number;
  prevHeight?: number;
};

type BrowserWindow = {
  innerWidth: number;
  innerHeight: number;
};

type WindowStore = {
  windows: WindowData[];
  setWindow: (window: WindowData) => void;
  updateWindow: (id: string, updates: Partial<WindowData>) => void;
  deleteWindow: (id: string) => void;
  deleteAllWindows: () => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  maximizeWindow: (id: string, browserWindow: BrowserWindow) => void;
  restoreFromMaximize: (id: string) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  setWindow: (window: WindowData) =>
    set((state) => (state.windows.some((w) => w.id === window.id) ? state : { windows: [...state.windows, window] })),

  updateWindow: (id: string, updates: Partial<WindowData>) =>
    set((state) => ({
      windows: state.windows.map((window) => (window.id === id ? { ...window, ...updates } : window)),
    })),

  deleteWindow: (id: string) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    })),

  deleteAllWindows: () =>
    set(() => ({
      windows: [],
    })),

  minimizeWindow: (id: string) =>
    set((state) => ({
      windows: state.windows.map((window) => (window.id === id ? { ...window, isMinimized: true } : window)),
    })),

  restoreWindow: (id: string) =>
    set((state) => ({
      windows: state.windows.map((window) => (window.id === id ? { ...window, isMinimized: false } : window)),
    })),

  maximizeWindow: (id: string, browserWindow: BrowserWindow) =>
    set((state) => {
      const maximizedWindow = state.windows.find((window) => window.id === id);

      if (maximizedWindow) {
        const newWindow = {
          ...maximizedWindow,
          prevX: maximizedWindow.x,
          prevY: maximizedWindow.y,
          prevWidth: maximizedWindow.width,
          prevHeight: maximizedWindow.height,
          x: 0,
          y: 0,
          width: browserWindow.innerWidth,
          height: browserWindow.innerHeight,
          isMaximized: true,
        };

        return {
          windows: state.windows.map((window) => (window.id === id ? newWindow : window)),
        };
      }

      return state;
    }),
  restoreFromMaximize: (id: string) =>
    set((state) => {
      const updatedWindows = state.windows.map((window) =>
        window.id === id && window.isMaximized
          ? {
              ...window,
              x: window.prevX ?? 0,
              y: window.prevY ?? 0,
              width: window.prevWidth ?? 300,
              height: window.prevHeight ?? 200,
              isMaximized: false,
              isTransitioning: true,
            }
          : window,
      );

      setTimeout(() => {
        set((state) => ({
          windows: state.windows.map((window) => (window.id === id ? { ...window, isTransitioning: false } : window)),
        }));
      }, 300);

      return { windows: updatedWindows };
    }),
}));
