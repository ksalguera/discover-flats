import { createTheme } from '@mui/material/styles';
import { cyan, teal, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: { main: cyan[600] },
    secondary: { main: teal[600] },
    neutral: {
      dark: grey[700],
      main: grey[500],
      light: grey[100]
    },
    background: { default: '#fcfcfc' },
  },
  typography: {
    h1: { fontSize: 40 },
    h2: { fontSize: 32 },
    h3: { fontSize: 24 },
    h4: { fontSize: 20 },
    h5: { fontSize: 16 },
    h6: { fontSize: 14 },
    }
})

export default theme;