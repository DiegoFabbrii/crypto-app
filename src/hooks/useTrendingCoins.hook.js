import axios from "axios";
import { useEffect, useState } from "react";

function useTrendingCoins() {
    const url = "https://api.coingecko.com/api/v3/search/trending";

    const [trendingCoins, setTrendingCoins] = useState([]);

    const getTrendingCoins = async () => {
        const { data } = await axios.get(url);

        const { coins } = await data;
        setTrendingCoins(coins);
    };

    useEffect(() => {
        getTrendingCoins();
    }, []);

    return trendingCoins;
}

export default useTrendingCoins;
