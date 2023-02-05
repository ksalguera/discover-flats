import { Box, Typography } from "@mui/material";
import Header from "./Header";

const Home = () =>  {
  return (
    <>
      <Header />
      <Box mx={2}>
        <Typography variant='h2'>Highest Rated Properties</Typography>
        <Typography variant='h2'>Most Reviewed Properties</Typography>
        <Typography variant='h2'>Affordable Properties</Typography>
        <Typography variant='h2'>Luxury Properties</Typography>  
      </Box>
    </>
  )
}

export default Home;