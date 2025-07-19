import { createContext, useContext, useEffect, useState } from "react";

export type TTheme = "dark" | "light" | "system";

type TThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: TTheme;
};

type TThemeProviderState = {
  theme: TTheme;
  setNewTheme: (newTheme: TTheme) => void;
};

const initialState: TThemeProviderState = {
  theme: "system",
  setNewTheme: () => null
};

const ThemeProviderContext = createContext<TThemeProviderState>(initialState);

const ThemeProvider = ({ children, defaultTheme = "system", ...props }: TThemeProviderProps) => {
  const [theme, setTheme] = useState<TTheme>(
    (localStorage.getItem("theme") as TTheme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setNewTheme: (newTheme: TTheme) => {
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    }
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export { useTheme, ThemeProvider };
