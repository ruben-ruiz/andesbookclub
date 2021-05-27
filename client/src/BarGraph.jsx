import React from 'react';
import { Bar } from 'react-chartjs-2';

const LineGraph = () => {
  const data = {
    labels: ['Start', '', '', '', 'Now'],
    datasets: [
      {
        label: 'Average Score',
        data: [80, 81, 82, 85, 90],
        backgroundColor: 'red',
        borderColor: 'red',
        tension: 0.4,
      },
      {
        label: 'Your Score',
        data: [70, 82, 85, 90, 95],
        backgroundColor: 'blue',
        borderColor: 'blue',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div id="line-graph">
      <h1>Line Graph</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LineGraph;
