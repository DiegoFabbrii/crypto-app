import React from "react";
import useCoinPage from "../../hooks/useCoinPage.hook";

function ContentHeader() {
    const coin = useCoinPage();

    return (
        <section className="w-full py-8 ">
            <div className="flex items-center gap-2">
                {coin.image ? (
                    <img
                        src={coin.image.large}
                        alt={coin.id}
                        className="w-[60px]"
                    />
                ) : null}

                <div className="flex gap-2">
                    <h2 className="font-medium text-xl lg:text-2xl">
                        {coin.name}
                    </h2>
                    <span className="font-medium text-sm">{`#${coin.market_cap_rank}`}</span>
                </div>
            </div>

            <div>
                {coin.market_data ? (
                    <div className="flex gap-2">
                        <p className="text-2xl lg:text-4xl ml-[68px] font-medium">
                            {`$ ${coin.market_data.current_price.usd}`}
                        </p>
                        <span
                            className={`
                            text-sm font-medium
                                ${
                                    coin.market_data
                                        .price_change_percentage_24h < 0
                                        ? "text-red-600"
                                        : "text-green-600"
                                }
                            `}
                        >
                            {`${Number(
                                coin.market_data
                                    .market_cap_change_percentage_24h
                            ).toFixed(2)}%`}
                        </span>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export default ContentHeader;
