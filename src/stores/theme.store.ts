import { PaletteMode } from "@mui/material/styles";
import { create } from "zustand";

interface IThemeStore {
  theme: PaletteMode;
  setTheme: (theme: PaletteMode) => void;
  toggleTheme: () => void;
}

const getInitialTheme = (): PaletteMode => {
  const savedTheme = localStorage.getItem("theme") as PaletteMode | null;
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeStore = create<IThemeStore>((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
  toggleTheme: () => {
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
  },
}));

// Listen for changes to the system theme
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
    ThemeStore.getState().setTheme(event.matches ? "dark" : "light");
  }
});

export default ThemeStore;
