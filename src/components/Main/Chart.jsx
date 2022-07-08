import React from "react";
import useChart from "../../hooks/useChart.hook";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { days } from "../../data/daysChart";

function Chart() {
    const { chart, setDay } = useChart();
    return (
        <section className="bg-secondary p-4 rounded-md">
            <div className="w-full flex justify-center gap-5">
                <select
                    className="bg-transparent my-4 p-2 border-primary border-[1px] rounded-sm text-sm font-medium"
                    onChange={(e) => setDay(e.target.value)}
                >
                    {days.map((item, index) => {
                        return (
                            <option
                                className="bg-primary"
                                value={item.value}
                                key={index}
                            >
                                {item.label}
                            </option>
                        );
                    })}
                </select>
            </div>

            <Line
                data={{
                    labels: chart.map((item) => {
                        const date = new Date(item[0]);
                        return date.toLocaleDateString();
                    }),

                    datasets: [
                        {
                            data: chart.map((item) => item[1]),
                            label: "Price",
                            fill: true,
                            borderColor: "#2b6cb0",
                            showLine: true,
                            backgroundColor: "#2b6cb030",
                            tension: 0.1,
                        },
                    ],
                }}
                options={{
                    elements: {
                        point: {
                            radius: 1,
                        },
                    },

                    plugins: {
                        legend: false, // Hide legend
                    },
                    scales: {
                        y: {
                            display: true, // Hide Y axis labels
                        },
                        x: {
                            display: false, // Hide X axis labels
                        },
                    },
                }}
            />
        </section>
    );
}

export default Chart;
