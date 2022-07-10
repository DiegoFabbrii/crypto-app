import React from "react";
import Coins from "../components/Main/Coins";
import SearchCoins from "../components/Main/SearchCoins";
import TrendingCoins from "../components/Main/TrendingCoins";

function Home() {
    return (
        <main className="flex items-center flex-col mb-12 font-medium">
            <SearchCoins />
            <div className="w-[85%] grid gap-7 lg:grid-cols-main">
                <Coins />
                <TrendingCoins />
            </div>
        </main>
    );
}

export default Home;
