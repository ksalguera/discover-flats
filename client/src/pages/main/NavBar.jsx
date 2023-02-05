import { Stack, Divider } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Stack direction='row' alignItems='center' divider={<Divider orientation='vertical' flexItem />} spacing={2}>
        <p>Manage Listings</p>
        <p>Add Listing</p>
        <p>Log In</p>          
      </Stack>
    </>
  )
}

export default NavBar;