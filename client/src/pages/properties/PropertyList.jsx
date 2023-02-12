import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import PropertyCard from '../../components/PropertyCard';
import PageTitle from '../../components/PageTitle';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  
  // properties fetch request
  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch('/properties');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperties(json);
    }

    fetchProperties()
  }, []);
  
  return (
    <Box mx={2}>
    <PageTitle title='Properties in Indianapolis' />
      <Grid container spacing={2}>
        {properties.map(property => {
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
  )
}

export default PropertyList;