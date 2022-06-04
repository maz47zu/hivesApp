import { createMuiTheme } from '@material-ui/core/styles';
import { amber, orange } from '@mui/material/colors';

const primaryColor = amber[500];
const secondaryColor = orange[700];

const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor
      },
      success: {
        main: '#4caf50'
      }
    },
    typography: {
      fontSize: 16,
      h3: {
        fontWeight: 700,
        fontSize: '2.2rem'
      },
      h4: {
        fontWeight: 700,
        fontSize: '1.75rem'
      },
      h5: {
        fontWeight: 500
      },
      h6: {
        fontWeight: 500
      }
    }
  })

  export default theme;