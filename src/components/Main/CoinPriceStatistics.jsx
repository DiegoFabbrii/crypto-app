import React from "react";
import useCoinPage from "../../hooks/useCoinPage.hook";

function CoinPriceStatistics() {
    const coin = useCoinPage();
    return (
        <section className="my-5 lg:my-0 p-5 bg-secondary rounded-md font-medium text-sm w-full max-w-[500px]">
            <div className="flex items-center gap-3 mb-3">
                {coin.image && <img src={coin.image.small} alt={coin.id} />}

                <div>
                    {coin.symbol && (
                        <span className="text-xs">
                            {coin.symbol.toUpperCase()}
                        </span>
                    )}

                    <p className="text-sm">Price Statistics</p>
                </div>
            </div>

            <div className="flex justify-between px-5 py-3">
                <span>Price</span>
                {coin.market_data && (
                    <span>
                        {`$ ${coin.market_data.current_price.usd.toLocaleString()}`}
                    </span>
                )}
            </div>

            <div className="flex justify-between px-5 py-3">
                <span>Price Change 24h</span>
                {coin.market_data && (
                    <span
                        className={
                            coin.market_data.price_change_percentage_24h < 0
                                ? "text-red-600"
                                : "text-green-600"
                        }
                    >
                        {`${coin.market_data.price_change_percentage_24h.toFixed(
                            2
                        )}%`}
                    </span>
                )}
            </div>

            <div className="flex justify-between px-5 py-3">
                <span>24 High</span>
                {coin.market_data && (
                    <span>
                        {`$ ${coin.market_data.high_24h.usd.toLocaleString()}`}
                    </span>
                )}
            </div>

            <div className="flex justify-between px-5 py-3">
                <span>24 Low</span>
                {coin.market_data && (
                    <span>{`$ ${coin.market_data.low_24h.usd.toLocaleString()}`}</span>
                )}
            </div>

            <div className="flex justify-between px-5 py-3">
                <span>Volume</span>
                {coin.market_data && (
                    <span>{`$ ${coin.market_data.total_volume.usd.toLocaleString()}`}</span>
                )}
            </div>

            <div className="flex justify-between px-5 py-3">
                <span>Rank</span>
                <span>{`#${coin.market_cap_rank}`}</span>
            </div>

            <div className="flex justify-between px-5 py-3">
                <span>Market Cap</span>
                {coin.market_data && (
                    <span>{`$ ${coin.market_data.market_cap.usd.toLocaleString()}`}</span>
                )}
            </div>
        </section>
    );
}

export default CoinPriceStatistics;
