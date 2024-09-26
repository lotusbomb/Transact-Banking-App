"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

  const accountNames = accounts.map((a) => a.name)
  const balances = accounts.map((a) => a.currentBalance)
    
    const data = {
      datasets: [
        {
          label: "Banks",
          data: balances,
          backgroundColor: ["#F67979", "#B86451", "#27A877"],
        },
      ],
      labels: accountNames
    };

    return(
        <Doughnut data={data} options={{
            cutout: "60%",
            plugins: {
                legend: {
                    display: false,
                }
            }
        }}   />
    )
};

export default DoughnutChart;
