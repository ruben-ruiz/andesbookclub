import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = (props) => {
  const data = {
    labels: ['Start', '', '', '', 'Now'],
    datasets: [
      {
        label: 'Average Score',
        data: [80, 81, 82, 85, 90],
        backgroundColor: '#ed405f',
        borderColor: '#ed405f',
        tension: 0.4,
      },
      {
        label: 'Your Score',
        data: [70, 82, 85, 90, 95],
        backgroundColor: '#6a6ad6',
        borderColor: '#6a6ad6',
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
    <div className="line-graph">
      <h2>Line Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
