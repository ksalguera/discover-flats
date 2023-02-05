import { Typography, Stack, IconButton, Divider } from "@mui/material";
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBox from "./SearchBox";


const TopBar = () => {
  return (
    <Box mt={2} mb={1} mx={2}>
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Typography variant='h1' color='primary'>Discover Flats</Typography>
          <SearchBox />
          <IconButton><FavoriteIcon size='small'/></IconButton>
        </Stack>
        <Stack direction='row' alignItems='center' divider={<Divider orientation='vertical' flexItem />} spacing={2}>
          <p>Manage Listings</p>
          <p>Add Listing</p>
          <p>Log In</p>          
        </Stack>
      </Stack>
    </Box>
  )
}

export default TopBar;