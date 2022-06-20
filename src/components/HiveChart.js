import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    temp: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    humid: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Temperatura',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //data: [35, 50, 60, 80, 20, 16,35, 50, 60, 80, 20, 16],
      borderColor: 'rgb(82, 82, 82)',
      backgroundColor: 'rgba(82, 82, 82, 0.5)',
      yAxisID: 'temp',
    },
    {
      label: 'Wilgotność',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [90, 50, 60, 80, 20, 10,35, 50, 60, 80, 20, 76],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      yAxisID: 'humid',
    },
  ],
};

export default function HiveChart( props ) {
  return (
    <>
      <Line options={options} data={data}/>
      <Typography>{'Props: '+props.id}</Typography>
    </>
  )
}
