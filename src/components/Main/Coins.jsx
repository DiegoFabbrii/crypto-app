import { Pagination } from "@mui/material";
import React, { useContext } from "react";
import { SearchAndPagContext } from "../../context/SearchAndPaginationContext";
import useCoins from "../../hooks/coins.hook";
import CoinTable from "./CoinTable";

function Coins() {
    const { filteredCoins } = useCoins();
    const { handlePage } = useContext(SearchAndPagContext);
    const pages = parseInt(filteredCoins.length / 10);

    return (
        <section>
            <h1 className="mb-8 text-xl lg:text-2xl">
                Top 10 cryptocurrencies
            </h1>
            <div className="bg-secondary rounded-lg">
                <CoinTable />

                <div className="w-fulll flex justify-center py-4">
                    <Pagination
                        className="text-primary"
                        count={pages}
                        onChange={handlePage}
                    />
                </div>
            </div>
        </section>
    );
}

export default Coins;
