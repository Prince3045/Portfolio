import { createContext, useContext, useState, useEffect } from 'react';
import { THEMES } from '../data/themes';

const ThemeContext = createContext({
  currentTheme: 'indigo',
  setTheme: () => {},
  themes: THEMES,
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && saved !== 'light' && THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'indigo';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', currentTheme);
    root.classList.add('dark');
    root.classList.remove('light');

    try {
      localStorage.setItem('portfolio-theme', currentTheme);
    } catch {
      // Ignore
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme: setCurrentTheme,
        themes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
