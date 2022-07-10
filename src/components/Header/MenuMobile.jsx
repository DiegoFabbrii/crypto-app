import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuMobContext } from "../../context/MenuMobContext";
import ToggleTheme from "./ToggleTheme";

function MenuMobile() {
    const { isOpen } = useContext(MenuMobContext);

    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "initial";
    }, [isOpen]);

    return (
        <div
            className={
                isOpen
                    ? "lg:hidden fixed right-0 top-20 w-full h-[calc(100vh_-_80px)]  flex justify-center ease-in duration-300 bg-primary z-10"
                    : "fixed right-[-100%] top-20 w-full h-[90%]   flex justify-center ease-in duration-300 bg-primary z-10"
            }
        >
            <nav className="w-[85%] h-[calc(100vh_-_80px)] flex flex-col justify-between pb-8">
                <ul className="w-full">
                    <li className="border-b py-6">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="border-b py-6">
                        <Link to="/">Account</Link>
                    </li>

                    <li className="border-b py-6">
                        <ToggleTheme />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuMobile;
