import React from "react";

function Buttons() {
    return (
        <div className="flex flex-col gap-5 font-bold lg:flex-row w-full">
            <button className="font-bold hover:text-accent">Sing in</button>
            <button className="rounded-2xl bg-button px-5 py-2 text-btnText font-bold shadow-lg w-[100%] lg:w-auto">
                Sing up
            </button>
        </div>
    );
}

export default Buttons;
