import { Stack, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SectionTitle from "../../components/SectionTitle";

const PropertyManager = () => {
  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <SectionTitle title='Property Manager Dashboard' />
        <Button color='secondary' size='small'><AddIcon />Add a Property</Button>
      </Stack>
      <Typography variant='body1'>No Properties Available</Typography>
    </>
  )
}

export default PropertyManager;