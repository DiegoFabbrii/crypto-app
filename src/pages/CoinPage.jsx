import React from "react";
import Chart from "../components/Main/Chart";
import CoinPriceStatistics from "../components/Main/CoinPriceStatistics";
import ContentHeader from "../components/Main/ContentHeader";

function CoinPage() {
    return (
        <main className="w-full flex justify-center mb-12">
            <div className="w-[85%]">
                <ContentHeader />
                <div className="w-full lg:grid gap-5 grid-cols-coinPage">
                    <Chart />
                    <CoinPriceStatistics />
                </div>
            </div>
        </main>
    );
}

export default CoinPage;
