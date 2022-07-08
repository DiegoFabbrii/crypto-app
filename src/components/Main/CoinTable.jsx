import React from "react";
import CoinTableBody from "./CoinTableBody";

function CoinTable() {
    return (
        <table className="w-full text-left text-sm lg:text-base font-medium">
            <thead>
                <tr className="border-b-[1px] border-b-tertiary">
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24h</th>
                </tr>
            </thead>

            <CoinTableBody />
        </table>
    );
}

export default CoinTable;
