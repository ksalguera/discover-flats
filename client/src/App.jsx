import './App.css';
import { useState, useEffect } from 'react';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ColorModeContext, useMode } from './contexts/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import TopBar from './pages/main/TopBar';
import Home from './pages/main/Home';
import PropertyList from './pages/properties/PropertyList';
import PropertyPage from './pages/properties/PropertyPage';
import FavoriteList from './pages/favorites/FavoriteList';
import Profile from './pages/profile/Profile';
import Login from './pages/profile/Login';
import SignUp from './pages/profile/SignUp';
import UserContext from './contexts/UserContext';

function App() {
  const [theme, colorMode] = useMode();
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  // set user fetch request
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/profile');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setUser(json);
    }
    fetchUser()
  }, [])

  // properties fetch request
  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch('/properties');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperties(json);
    }

    fetchProperties()
  }, [])

  // updates properties based on search value field 
  const updatedSearchValue = searchValue.toLowerCase();
  const filteredProperties = properties.filter(property => property.name.toLowerCase().includes(updatedSearchValue));
  const updatedProperties = searchValue === '' ? properties : filteredProperties;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <UserContext.Provider value={{ user, setUser }}>
          <TopBar properties={properties} searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/properties' element={<PropertyList properties={updatedProperties} />} />           
            <Route path='/properties/:id' element={<PropertyPage />} />   
            <Route path='/favorites' element={<FavoriteList />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp /> } />
          </Routes>
        </UserContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;