import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './Header';
import PropertyCard from '../../components/PropertyCard';

const Home = () =>  {
  const [luxury, setLuxury] = useState([]);

    // properties fetch request
    useEffect(() => {
      const fetchProperties = async () => {
        const res = await fetch('/luxury_properties');
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        setLuxury(json)
      }
  
      fetchProperties()
    }, []);
    
  return (
    <>
      <Header />
      <Box mx={2}>
        <Typography variant='h2'>Most Liked Properties</Typography>
        <Typography variant='h2'>Affordable Properties</Typography>
        <Typography variant='h2'>Midrange Properteis</Typography>
        <Typography variant='h2'>Luxury Properties</Typography> 
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
      </Box>
    </>
  )
}

export default Home;