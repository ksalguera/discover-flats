import { useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import PropertyCard from '../../components/PropertyCard';
import PageTitle from '../../components/PageTitle';
import FavoriteContext from '../../contexts/FavoriteContex';

const FavoriteList = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <Box mx={2}>
      <PageTitle title='Favorites' />
      {favorites.length === 0 ? <h3>No Results Found</h3> :
      <Grid container spacing={2}>
        {favorites.map(favorite => {
          return (
            <Grid xs={12} md={6} lg={4} xl={2} key={favorite.id}>
              <PropertyCard
                key={favorite.property.id}
                propertyId={favorite.property.id}
                name={favorite.property.name}
                image={favorite.property.image_url}
                address={favorite.property.full_address}
                phone={favorite.property.phone_number}
              />
            </Grid>
          )
        })}
      </Grid>
      }
    </Box>
  )
}

export default FavoriteList;