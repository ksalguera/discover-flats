import { Typography } from "@mui/material";
import Header from "./Header";

const Home = () =>  {
  return (
    <>
      <Header />
      <Typography variant='h2'>Highest Rated Properties</Typography>
      <Typography variant='h2'>Most Reviewed Properties</Typography>
      <Typography variant='h2'>Affordable Properties</Typography>
      <Typography variant='h2'>Luxury Properties</Typography>
    </>
  )
}

export default Home;