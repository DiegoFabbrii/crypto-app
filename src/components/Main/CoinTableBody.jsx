import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SearchAndPagContext } from "../../context/SearchAndPaginationContext";
import useCoins from "../../hooks/coins.hook";

function CoinTableBody() {
    const navigate = useNavigate();

    const { filteredCoins } = useCoins();
    const { page } = useContext(SearchAndPagContext);

    return (
        <tbody>
            {filteredCoins
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((item, index) => {
                    const {
                        current_price,
                        price_change_percentage_24h,
                        symbol,
                        name,
                        image,
                        market_cap_rank,
                    } = item;
                    Number(current_price && price_change_percentage_24h);

                    return (
                        <tr
                            key={index}
                            className="border-b-[1px] border-b-tertiary cursor-pointer hover:bg-tertiary transition"
                            onClick={() => navigate(`coin/${item.id}`)}
                        >
                            <td>{market_cap_rank}</td>
                            <td>
                                <div className="flex gap-3 items-center">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-[20px] md:w-[30px]"
                                    />
                                    <span>{symbol.toUpperCase()}</span>
                                </div>
                            </td>
                            <td>{`$ ${current_price.toLocaleString()}`}</td>
                            <td
                                className={
                                    price_change_percentage_24h < 0
                                        ? "text-red-600"
                                        : "text-green-600"
                                }
                            >
                                {`${price_change_percentage_24h.toFixed(2)}%`}
                            </td>
                        </tr>
                    );
                })}
        </tbody>
    );
}

export default CoinTableBody;
