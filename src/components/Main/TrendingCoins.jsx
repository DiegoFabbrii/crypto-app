import React from "react";
import { useNavigate } from "react-router-dom";
import useTrendingCoins from "../../hooks/useTrendingCoins.hook";

function TrendingCoins() {
    const navigate = useNavigate();
    const trendingCoins = useTrendingCoins();

    return (
        <section>
            <h1 className="mb-8 text-xl lg:text-2xl">
                Trending Top cryptocurrencies
            </h1>
            <div className=" flex flex-col bg-secondary rounded-md self-start">
                {trendingCoins.map(({ item }, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-5 border-b-[1px] border-b-tertiary p-6 hover:bg-tertiary cursor-pointer"
                            onClick={() => navigate(`coin/${item.id}`)}
                        >
                            <img src={item.thumb} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default TrendingCoins;
