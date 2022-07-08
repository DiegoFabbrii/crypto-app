import React, { createContext, useState } from "react";

export const MenuMobContext = createContext();

function MenuMobProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <MenuMobContext.Provider value={{ handleClick, isOpen }}>
            {children}
        </MenuMobContext.Provider>
    );
}

export default MenuMobProvider;
