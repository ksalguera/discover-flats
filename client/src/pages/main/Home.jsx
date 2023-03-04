import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './Header';
import PropertyCard from '../../components/PropertyCard';

const Home = ({ properties }) =>  {
  const [affordable, setAffordable] = useState([]);
  const [midrange, setMidrange] = useState([]);
  const [luxury, setLuxury] = useState([]);
 
  useEffect(() => {
    setAffordable(properties.filter(property => property.affordability === 'affordable'));
    setMidrange(properties.filter(property => property.affordability === 'midrange'));
    setLuxury(properties.filter(property => property.affordability === 'luxury'));
  }, [properties])
    
  return (
    <>
      <Header />
      <Box mx={2}>
        <Typography variant='h2' my={2}>Affordable Properties</Typography>
        {affordable.length === 0 ? <h3>No Results Found</h3> :
        <Grid container spacing={6} justifyContent='flex-start'>
          {affordable.slice(0,6).map(property => {
            return (
              <Grid xs={12} md={6} lg={4} xl={2} key={property.id}>
                <PropertyCard
                  key={property.id}
                  propertyId={property.id}
                  name={property.name}
                  image={property.image_url}
                  address={property.full_address}
                  phone={property.phone_number}
                />
              </Grid>
            )
          })}
        </Grid>
        }
        <Typography variant='h2' my={2}>Midrange Properteis</Typography>
        {midrange.length === 0 ? <h3>No Results Found</h3> :
        <Grid container spacing={6} justifyContent='flex-start'>
          {midrange.slice(0,6).map(property => {
            return (
              <Grid xs={12} md={6} lg={4} xl={2} key={property.id}>
                <PropertyCard
                  key={property.id}
                  propertyId={property.id}
                  name={property.name}
                  image={property.image_url}
                  address={property.full_address}
                  phone={property.phone_number}
                />
              </Grid>
            )
          })}
        </Grid>
        }
        <Typography variant='h2' my={2}>Luxury Properties</Typography>
        {luxury.length === 0 ? <h3>No Results Found</h3> :
        <Grid container spacing={6} justifyContent='flex-start'>
          {luxury.slice(0,6).map(property => {
            return (
              <Grid xs={12} md={6} lg={4} xl={2} key={property.id}>
                <PropertyCard
                  key={property.id}
                  propertyId={property.id}
                  name={property.name}
                  image={property.image_url}
                  address={property.full_address}
                  phone={property.phone_number}
                />
              </Grid>
            )
          })}
        </Grid>
        }
      </Box>
    </>
  )
}

export default Home;