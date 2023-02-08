import './App.css';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ColorModeContext, useMode } from './contexts/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import TopBar from './pages/main/TopBar';
import Home from './pages/main/Home';
import PropertyList from './pages/properties/PropertyList';
import PropertyPage from './pages/properties/PropertyPage';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/properties' element={<PropertyList />} />           
          <Route path='/properties/:id' element={<PropertyPage />} />   
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;