import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useCoinPage() {
    const [coin, setCoin] = useState([]);
    const { id } = useParams();
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;

    const fetchCoin = async () => {
        const { data } = await axios.get(url);
        setCoin(data);
    };

    useEffect(() => {
        fetchCoin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return coin;
}

export default useCoinPage;
