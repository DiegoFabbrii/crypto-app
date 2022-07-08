import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useChart() {
    const [chart, setChart] = useState([]);
    const [day, setDay] = useState("1");
    const { id } = useParams();
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`;

    const fetchCoinChart = async () => {
        const { data } = await axios.get(url);
        setChart(data.prices);
    };

    useEffect(() => {
        fetchCoinChart();
    }, [day]);

    return { chart, setDay, day };
}

export default useChart;
