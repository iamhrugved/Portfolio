import React, { createContext, useState, useEffect } from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.Dark,
    toggleTheme: () => { },
});

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(Theme.Dark);

    const applyTheme = (selectedTheme: Theme) => {
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(selectedTheme);
    };

    const toggleTheme = () => {
        const selectedTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(selectedTheme);
        applyTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    };
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const initialTheme = storedTheme ? (storedTheme as Theme) : Theme.Dark;
        setTheme(initialTheme);
        applyTheme(initialTheme);
        localStorage.setItem('theme', initialTheme);
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[] );

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
