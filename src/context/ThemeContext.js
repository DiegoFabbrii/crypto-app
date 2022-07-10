import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const handleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        !localStorage.colorTheme &&
            localStorage.setItem("colorTheme", JSON.stringify(theme));

        const initialTheme = JSON.parse(localStorage.getItem("colorTheme"));
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("colorTheme", JSON.stringify(theme));
        const root = document.documentElement;
        const isDark = theme === "dark";

        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
