import { useNavigate } from 'react-router-dom';
import { Typography, Stack, IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";


const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Box mt={2} mb={1} mx={2}>
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Typography variant='h1' color='primary' onClick={() => navigate('/')}>Discover Flats</Typography>
          <SearchBox />
          <IconButton><FavoriteIcon size='small'/></IconButton>
        </Stack>
        <NavBar />
      </Stack>
    </Box>
  )
}

export default TopBar;