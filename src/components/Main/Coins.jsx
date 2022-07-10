import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React, { useContext } from "react";
import { SearchAndPagContext } from "../../context/SearchAndPaginationContext";
import useCoins from "../../hooks/coins.hook";
import CoinTable from "./CoinTable";
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = makeStyles({
    pagination: ({ theme }) => ({
        "& .MuiPaginationItem-root": {
            color: theme === "light" ? "#2d3748" : "#dbdbdb",
        },
    }),
});

function Coins() {
    const { filteredCoins } = useCoins();
    const { handlePage } = useContext(SearchAndPagContext);
    const { theme } = useContext(ThemeContext);
    const pages = parseInt(filteredCoins.length / 10);

    const props = { theme: theme };
    const classes = useStyles(props);

    return (
        <section>
            <h1 className="mb-8 text-xl lg:text-2xl">
                Top 10 cryptocurrencies
            </h1>
            <div className="bg-secondary rounded-lg">
                <CoinTable />

                <div className="w-fulll flex justify-center py-4">
                    <Pagination
                        className={classes.pagination}
                        count={pages}
                        onChange={handlePage}
                    />
                </div>
            </div>
        </section>
    );
}

export default Coins;
