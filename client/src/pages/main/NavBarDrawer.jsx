import { useContext } from 'react';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Stack, Divider, Button, Drawer } from '@mui/material';
import UserContext from '../../contexts/UserContext';
import FavoriteContext from '../../contexts/FavoriteContex';
import navbarStyle from './navbarStyle';

const NavBarDrawer = ({ drawerOpen, onDrawerToggle }) => {
  const { user, setUser } = useContext(UserContext);
  const { setFavorites } = useContext(FavoriteContext);
  const navigate = useNavigate();
  
  const handleLogOut = async () => {
    const res = await fetch('/logout', { method: 'DELETE' });
    if (res.ok) { 
      setUser(null)
      setFavorites([])
      navigate('/')
    }
    onDrawerToggle()
  }

  const handleLogin = () => {
    navigate('/login')
    onDrawerToggle()
  }

  return (
    <>
      <Drawer anchor='right' open={drawerOpen} onClose={onDrawerToggle} PaperProps={{ sx: { width: '200px' } }}> 
        <Stack alignItems='center' spacing={2} py={2} divider={<Divider orientation='horizontal' flexItem />}>
          <Link component={RouterLink} underline='none' sx={navbarStyle} to='/properties' onClick={onDrawerToggle}>Properties</Link>         
          { user && <Link component={RouterLink} underline='none' sx={navbarStyle} to='/favorites' onClick={onDrawerToggle}>Favorties</Link> }
          { user && <Link component={RouterLink} underline='none' sx={navbarStyle} to='/ratings' onClick={onDrawerToggle}>My Ratings</Link> }
          { user && <Link component={RouterLink} underline='none' sx={navbarStyle} to='/profile' onClick={onDrawerToggle}>Profile</Link> }
          <Button variant='outlined' size='small' onClick={!user ? handleLogin : handleLogOut} >{ !user ? 'Login' : 'Log Out'}</Button>
        </Stack>
      </Drawer>
    </>
  )
}

export default NavBarDrawer;