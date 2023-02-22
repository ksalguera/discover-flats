import { useState, useContext } from 'react';
import { Stack, Card, CardContent, CardMedia, Button, Typography, Checkbox } from '@mui/material';
import EmptyHeart from '@mui/icons-material/FavoriteBorder';
import FullHeart from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import FavoriteContext from '../contexts/FavoriteContex';
import UserContext from '../contexts/UserContext';

function PropertyCard({ propertyId, name, image, address, phone }) {
  const { favorites, setFavorites } = useContext(FavoriteContext); 
  // checks to see if a property is currently in a user's saved favorites - returns true or false
  const isFavorite = favorites.some(favorite => favorite.property.id === propertyId);
  const [checked, setChecked] = useState(isFavorite);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleFavoriteClick = e => {
    const isChecked = e.target.checked;
    const postOptions = { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ user_id: user.id, property_id: propertyId })};
    const selectedProperty = favorites.find(favorite => favorite.property.id === propertyId);
    
    if (isChecked) {
      fetch('/favorites', postOptions)
        .then(res => res.json())
        .then(data => setFavorites([...favorites, data]))
    } else {
      fetch(`/favorites/${selectedProperty.id}`, { method: 'DELETE' })
        .then(() => {
          const updatedFavorites = favorites.filter(favorite => favorite.property.id !== propertyId)
          setFavorites(updatedFavorites)
        })
    }

    setChecked(isChecked);
  }
  
  
  return (
    <Card sx={{ minWidth: 275, maxWidth: 450 }}>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={2}>
          <Typography variant='h4' color='text.secondary'>{name}</Typography>
          { user && <Checkbox 
            icon={<EmptyHeart size='small' />} 
            checkedIcon={<FullHeart size='small' />} 
            onChange={handleFavoriteClick} 
            checked={checked} 
          /> }
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

export default PropertyCard;