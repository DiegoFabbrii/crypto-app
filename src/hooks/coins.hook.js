import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SearchAndPagContext } from "../context/SearchAndPaginationContext";

function useCoins() {
    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    const [coins, setCoins] = useState([]);
    const [filteredCoins, setFilteredCoins] = useState([]);
    const { search, setPage, setSearch } = useContext(SearchAndPagContext);

    const getCoins = async () => {
        const { data } = await axios.get(url);
        setCoins(data);
    };

    useEffect(() => {
        getCoins();
        setPage(1);
        setSearch("");
    }, [setPage, setSearch]);

    useEffect(() => {
        const researchedCoins = coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCoins(researchedCoins);
    }, [search, coins]);

    return { filteredCoins };
}

export default useCoins;
