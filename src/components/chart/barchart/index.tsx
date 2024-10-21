import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { IBarChart } from "../../../interfaces/barchart";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({
    labels,
    data,
    title,
    borderColor,
    backgroundColor,
    tickColor,
}: IBarChart) => {
    const barChartData = {
        labels: labels,
        datasets: [
            {
                label: title,
                data: data,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            display: false,
          },
          title: {
            display: false,
            text: title,
          },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: tickColor
                }
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: tickColor,
                    callback: function(value: any) {
                        return [0, 200, 400, 600, 800, 1000].includes(value) ? value : '';
                    },
                },
            },
        },
    };

    return <Bar data={barChartData} options={options} />;
};

export default BarChart;
