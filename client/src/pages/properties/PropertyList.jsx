import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import PropertyCard from '../../components/PropertyCard';
import PageTitle from '../../components/PageTitle';

const PropertyList = ({ properties }) => {
  return (
    <Box mx={2}>
      <PageTitle title='Properties in Indianapolis' />
      {properties.length === 0 ? <h3>No Results Found</h3> :
      <Grid container spacing={2}>
        {properties.map(property => {
          return (
            <Grid xs={12} md={6} lg={4} xl={2} key={property.id}>
              <PropertyCard
                key={property.id}
                propertyId={property.id}
                name={property.name}
                image={property.image_url}
                address={property.address_line_one}
                cityStateZip={`${property.city}, ${property.state} ${property.zip}`}
                phone={property.phone_number}
                favorites={property.favorites}
              />
            </Grid>
          )
        })}
      </Grid>
      }
    </Box>
  )
}

export default PropertyList;