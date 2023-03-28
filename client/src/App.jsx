import { useState, useEffect } from 'react';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';

import theme from './contexts/ThemeContext';
import UserContext from './contexts/UserContext';
import { FavoriteContextProvider } from './contexts/FavoriteContext';
import { ReviewContextProvider } from './contexts/ReviewContext';

import TopBar from './pages/main/TopBar';
import Home from './pages/main/Home';
import PropertyList from './pages/properties/PropertyList';
import PropertyPage from './pages/properties/PropertyPage';
import PropertyForm from './pages/properties/PropertyForm';
import FavoriteList from './pages/favorites/FavoriteList';
import ReviewList from './pages/reviews/ReviewList';
import Profile from './pages/profile/Profile';
import Login from './pages/profile/Login';
import SignUp from './pages/profile/SignUp';
import NotFound from './components/NotFound';
import PropertyEditForm from './pages/properties/PropertyEditForm';
import ImageEditForm from './pages/properties/ImageEditForm';

import './index.css';

function App() {;
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/profile');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setUser(json);
    }
    fetchUser().catch(error => error.message)
  }, [])

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch('/properties');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperties(json);
    }

    fetchProperties();
  }, [])

  // updates properties based on search value field 
  const updatedSearchValue = searchValue.toLowerCase();
  const filteredProperties = properties.filter(property => property.name.toLowerCase().includes(updatedSearchValue));
  const updatedProperties = searchValue === '' ? properties : filteredProperties;
 
  // handle property edit
  const handlePropertyEdit = updatedProperty => {
    const updatedProperties = properties.map(property => property.id === updatedProperty.id ? updatedProperty : property)
    setProperties(updatedProperties)
  }

  // handle property post 
  const handlePropertyAdd = newProperty => setProperties([...properties, newProperty]);
  
  // handle property delete
  const handlePropertyDelete = id => {
    const updatedProperties = properties.filter(property => property.id !== id);
    setProperties(updatedProperties);
  }

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen)

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <UserContext.Provider value={{ user, setUser }}>
        <FavoriteContextProvider>
          <ReviewContextProvider>
            <TopBar properties={properties} searchValue={searchValue} setSearchValue={setSearchValue} drawerOpen={drawerOpen} onDrawerToggle={handleDrawerToggle} />
            <Routes>
              <Route path='/' element={<Home properties={updatedProperties} />} /> 
              <Route path='/properties' element={<PropertyList properties={updatedProperties} />} />           
              <Route path='/properties/:id' element={<PropertyPage />} />
              <Route path='/properties/:id/edit' element={<PropertyEditForm onPropertyEdit={handlePropertyEdit} />} />
              <Route path='/properties/:id/images' element={<ImageEditForm />} />
              <Route path='/properties/new' element={<PropertyForm onPropertyAdd={handlePropertyAdd} />} />
              <Route path='/favorites' element={<FavoriteList />} />
              <Route path='/reviews' element={<ReviewList />} />
              <Route path='/profile' element={<Profile properties={updatedProperties} onPropertyDelete={handlePropertyDelete} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp /> } />
              <Route path='*' element={<NotFound />} />
            </Routes>              
          </ReviewContextProvider>
        </FavoriteContextProvider>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default App;