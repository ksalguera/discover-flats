import { useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import PropertyCard from '../../components/PropertyCard';
import PageTitle from '../../components/PageTitle';
import { FavoriteContext } from '../../contexts/FavoriteContext';
import UserContext from '../../contexts/UserContext';

const FavoriteList = () => {
  const { user } = useContext(UserContext);
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      { !user ? <Typography variant='body1' mx={2}>Not Authorized.</Typography> :
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
      }
    </>
  )
}

export default FavoriteList;