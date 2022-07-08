import React, { useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MenuMobContext } from "../../context/MenuMobContext";

function BtnMenu() {
    const { isOpen, handleClick } = useContext(MenuMobContext);

    return (
        <div
            onClick={handleClick}
            className="w-6 h-6 flex justify-center items-center cursor-pointer lg:hidden"
        >
            {isOpen ? (
                <AiOutlineClose size={24} />
            ) : (
                <AiOutlineMenu size={24} />
            )}
        </div>
    );
}

export default BtnMenu;
