import { useState, useEffect } from 'react';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ColorModeContext, useMode } from './contexts/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
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
import UserContext from './contexts/UserContext';
import { FavoriteContextProvider } from './contexts/FavoriteContext';
import { ReviewContextProvider } from './contexts/ReviewContext';
import './index.css';
import PropertyEditForm from './pages/properties/PropertyEditForm';
import ImageEditForm from './pages/properties/ImageEditForm';

function App() {
  const [theme, colorMode] = useMode();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // set user when navigating back to app
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/profile');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setUser(json);
    }
    fetchUser().catch(error => error.message)
  }, [])

  // properties fetch request
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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <UserContext.Provider value={{ user, setUser }}>
          <FavoriteContextProvider>
            <ReviewContextProvider>
              <TopBar properties={properties} searchValue={searchValue} setSearchValue={setSearchValue} drawerOpen={drawerOpen} onDrawerToggle={handleDrawerToggle} />
              { loading ? <p>Loading...</p> : <Routes>
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
              </Routes>}              
            </ReviewContextProvider>
          </FavoriteContextProvider>
        </UserContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;