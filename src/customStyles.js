import { makeStyles } from '@material-ui/core'
import { amber } from '@mui/material/colors';

const chartBackgroundColour = amber[300];

const useStyles = makeStyles({
    root: {
      background: 'red',
      border: 0,
      borderRadius: 3,
      //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'grey',
      height: 48,
      padding: '0 30px',
    },
    icon:{
      color: 'black'
    },
    box:{
      marginTop: "10px",
      marginBottom: "4px"
    },
    container: {
      marginTop: "8px",
      marginBottom: "4px"
    },
    paper: {
        background: '#ffc107',
        color: 'black'
    },
    button: {
        color: 'black'
    },
    chart: {
        background: chartBackgroundColour,
        color: 'black'
    }
  });

export default useStyles;