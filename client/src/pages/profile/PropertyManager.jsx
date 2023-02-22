import { Stack, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SectionTitle from "../../components/SectionTitle";

const PropertyManager = ({ properties }) => {
  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <SectionTitle title='Property Manager Dashboard' />
        <Button color='secondary' size='small'><AddIcon />Add a Property</Button>
      </Stack>
      <Typography variant='body1'>No Properties Available</Typography>
      <Stack direction='row' spacing={3}>
      <Typography variant='h3'><ApartmentIcon /> Wesmont</Typography>
        <Button color='secondary' variant='outlined' size='small'>View</Button>
        <Button color='success' variant='outlined' size='small'>Edit</Button>
        <Button color='warning' variant='outlined' size='small'>Delete</Button>
      </Stack>
    </>
  )
}

export default PropertyManager;