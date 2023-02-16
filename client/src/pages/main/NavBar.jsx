import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { Stack, Link, Button } from "@mui/material";

const NavBar = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    const logOut = async () => {
      const res = await fetch('/logout', { method: 'DELETE' });
      if (res.ok) setCurrentUser(null) 
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
        <Link component={RouterLink} underline='none' sx={navBarStyle} to='/profile'>Profile</Link> 
        { !currentUser ?
          <Button variant='outlined' size='small' onClick={() => navigate('/login')}>Login</Button>
          :
          <Button variant='outlined' size='small' onClick={handleLogOut}>Log Out</Button>
        }
      </Stack>
    </>
  )
}

export default NavBar;