import { useContext } from 'react';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { Stack, Link, Button } from "@mui/material";
import UserContext from '../../contexts/UserContext';
import { FavoriteContext } from '../../contexts/FavoriteContext';
import navbarStyle from './navbarStyle';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const { setFavorites } = useContext(FavoriteContext);
  const navigate = useNavigate();
  
  const handleLogin = () => !user ? navigate('/login') : handleLogOut();
  
  const handleLogOut = async () => {
    const res = await fetch('/logout', { method: 'DELETE' });
    if (res.ok) { 
      setUser(null)
      setFavorites([])
      navigate('/')
    }
  }

  return (
    <>
      <Stack direction='row' alignItems='center' spacing={2}>
        <Link component={RouterLink} underline='none' sx={navbarStyle} to='/properties'>Properties</Link>         
        { user && <Link component={RouterLink} underline='none' sx={navbarStyle} to='/favorites'>Favorties</Link> }
        { user && <Link component={RouterLink} underline='none' sx={navbarStyle} to='/reviews'>Reviews</Link> }
        { user && <Link component={RouterLink} underline='none' sx={navbarStyle} to='/profile'>Profile</Link> }
        <Button variant='outlined' size='small' onClick={handleLogin} >{ !user ? 'Login' : 'Log Out'}</Button>
      </Stack>
    </>
  )
}

export default NavBar;