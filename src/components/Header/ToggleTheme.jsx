import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeContext";

function ToggleTheme() {
    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <button
            className="flex items-center gap-2 font-bold"
            onClick={handleTheme}
        >
            {theme === "dark" ? (
                <>
                    <HiSun className="text-xl" />
                    <span>Light mode</span>
                </>
            ) : (
                <>
                    <HiMoon className="text-xl" />
                    <span>Dark mode</span>
                </>
            )}
        </button>
    );
}

export default ToggleTheme;
