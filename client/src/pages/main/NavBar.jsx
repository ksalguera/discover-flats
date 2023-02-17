import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { Stack, Link, Button } from "@mui/material";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    const logOut = async () => {
      const res = await fetch('/logout', { method: 'DELETE' });
      if (res.ok) setUser(null) 
    }

    logOut()
    navigate('/properties')
  }

  // ----------------- Active Link Style ----------------- //
  const navBarStyle = {
    '&&': {
      color: 'neutral.main'
    },
    '&.active': {
      color: 'primary.main',
      fontWeight: 'bold' 
    },
    '&:hover': {
      color: 'primary.main'
    }
  }

  return (
    <>
      <Stack direction='row' alignItems='center' spacing={2}>
        <Link component={RouterLink} underline='none' sx={navBarStyle} to='/properties'>Properties</Link>         
        <Link component={RouterLink} underline='none' sx={navBarStyle} to='/favorites'>Favorties</Link>
        { user && <Link component={RouterLink} underline='none' sx={navBarStyle} to='/profile'>Profile</Link> }
        { !user ?
          <Button variant='outlined' size='small' onClick={() => navigate('/login')}>Login</Button>
          :
          <Button variant='outlined' size='small' onClick={handleLogOut}>Log Out</Button>
        }
      </Stack>
    </>
  )
}

export default NavBar;