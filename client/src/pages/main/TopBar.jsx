import { useNavigate } from 'react-router-dom';
import { Typography, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { useMode } from '../../contexts/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";


const TopBar = ({ properties, searchValue, setSearchValue }) => {
  const navigate = useNavigate();
  const [theme] = useMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box mt={2} mb={1} mx={2}>
      {
        isMobile ?
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h1' color='primary' onClick={() => navigate('/')}>Discover Flats</Typography>
            <MenuIcon />
          </Stack>      
          :  
          <Stack direction='row' justifyContent='space-between' spacing={1}>
            <Stack direction='row' alignItems='center' spacing={2}>
              <Typography variant='h1' color='primary' onClick={() => navigate('/')}>Discover Flats</Typography>
              <SearchBox properties={properties} searchValue={searchValue} setSearchValue ={setSearchValue} />
            </Stack>
            <NavBar />
          </Stack>
      }
    </Box>
  )
}

export default TopBar;