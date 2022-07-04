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
import { Divider } from '@mui/material';
import useStyles from '../customStyles';

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
    yaxis: {
      type: 'linear',
      display: true,
      position: 'left',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',];

export const dataTemp = {
  labels,
  datasets: [
    {
      label: 'Temperatura',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //data: [35, 50, 60, 80, 20, 16,35, 50, 60, 80, 20, 16],
      borderColor: 'rgb(82, 82, 82)',
      backgroundColor: 'rgba(82, 82, 82, 0.5)',
      yAxisID: 'yaxis',
    },
  ],
};

export const dataHumid = {
  labels,
  datasets: [
    {
      label: 'Wilgotność',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [90, 50, 60, 80, 20, 10,35, 50, 60, 80, 20, 76],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      yAxisID: 'yaxis',
    },
  ],
};

export const dataWeight = {
  labels,
  datasets: [
    {
      label: 'Waga',
      //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [90, 50, 60, 80, 20, 10,35, 50, 60, 80, 20, 76],
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      yAxisID: 'yaxis',
    },
  ],
};

export default function HiveChart( props ) {
  const classes = useStyles();
  return (
    <>
      <Line options={options} data={dataTemp}/>
      <Divider/>
      <Line options={options} data={dataHumid} className={classes.chartPosition}/>
      <Divider/>
      <Line options={options} data={dataWeight} className={classes.chartPosition}/>
      <Typography>{'Props: ' + props.id}</Typography>
    </>
  )
}
