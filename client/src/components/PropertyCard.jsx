import { Stack, Card, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import EmptyHeart from '@mui/icons-material/FavoriteBorder';
import FullHeart from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

function PropertySummary({ propertyId, name, image, address, phone }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275, maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={2}>
          <Typography variant='h4' color='text.secondary'>{name}</Typography>
          <IconButton><EmptyHeart size='small'/></IconButton>
        </Stack>
        <Typography sx={{ fontSize: 14 }} color='text.secondary'>{address}<br />{phone}</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={2} mt={2}>
          <Typography sx={{ fontSize: 14 }} color='text.secondary'>1 Unit Available</Typography>
          <Button size='small' onClick={() => navigate(`/properties/${propertyId}`)}>Learn More</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PropertySummary