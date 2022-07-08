import React from "react";
import { Link } from "react-router-dom";
import BtnMenu from "./BtnMenu";
import MenuMobile from "./MenuMobile";
import ToggleTheme from "./ToggleTheme";

// className="flex justify-between py-5 w-5/6 max-w-6xl"

function Header() {
    return (
        <header className="flex justify-center h-20">
            <nav className="flex justify-between items-center w-[85%] max-w-6xl font-bold">
                <Link to="/">
                    <h1 className="text-2xl">CryptoBase</h1>
                </Link>
                <div className="hidden lg:block">
                    <ToggleTheme />
                </div>
                <BtnMenu />
                <MenuMobile />
            </nav>
        </header>
    );
}

export default Header;
