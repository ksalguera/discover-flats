import { useNavigate } from 'react-router-dom';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../contexts/ThemeContext';
import SearchBox from './SearchBox';
import NavBar from './NavBar';
import NavBarDrawer from './NavBarDrawer';

const TopBar = ({ properties, searchValue, setSearchValue, drawerOpen, onDrawerToggle }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box mt={2} mb={1} mx={2}>
      { isMobile
        ?
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h1' color='primary' sx={{cursor: 'pointer'}} onClick={() => navigate('/')}>Discover Flats</Typography>
          <IconButton onClick={onDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <NavBarDrawer drawerOpen={drawerOpen} onDrawerToggle={onDrawerToggle} />
        </Stack>      
        :  
        <Stack direction='row' justifyContent='space-between' spacing={1}>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Typography variant='h1' color='primary' sx={{cursor: 'pointer'}} onClick={() => navigate('/')}>Discover Flats</Typography>
            <SearchBox properties={properties} searchValue={searchValue} setSearchValue ={setSearchValue} />
          </Stack>
          <NavBar />
        </Stack>
      }
    </Box>
  )
}

export default TopBar;