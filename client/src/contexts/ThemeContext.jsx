import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { cyan, green, grey } from '@mui/material/colors';

////////////////////////////////////////////////////////
//                   creates MUI theme                //
////////////////////////////////////////////////////////

export const themeSettings = mode => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
          primary: { main: cyan[300] },
          secondary: { main: green[500] },
          neutral: {
            dark: grey[700],
            main: grey[500],
            light: grey[100]
          },
          background: { default: '#fcfcfc' }
        } : {
          primary: { main: cyan[300] },
          secondary: { main: green[500] },
          neutral: {
            dark: grey[700],
            main: grey[500],
            light: grey[100]
          },
          background: { default: grey[900] }
        }
      )
    },
    // typography settings
    typography: {
      h1: { fontSize: 40 },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 }
    }
  }
}

////////////////////////////////////////////////////////
//               creates colorMode context            //
////////////////////////////////////////////////////////

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

////////////////////////////////////////////////////////
//  sets, updates, and exports light/dark mode state  //
////////////////////////////////////////////////////////

export const useMode = () => {
  const [mode, setMode] = useState('light');
  
  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark'),
  }), []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
}