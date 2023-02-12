import { NavLink as RouterLink } from 'react-router-dom';
import { Stack, Link } from "@mui/material";

const NavBar = () => {
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
        <Link component={RouterLink} underline='none' sx={navBarStyle} to='/login'>Log In</Link>       
      </Stack>
    </>
  )
}

export default NavBar;