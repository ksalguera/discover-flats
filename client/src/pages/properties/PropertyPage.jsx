import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import PropertyGallery from './PropertyGallery';
import SectionTitle from '../../components/SectionTitle';

const PropertyPage = () => {
  let { id } = useParams();
  const [property, setProperty] = useState([]);

  // properties/:id fetch request
  useEffect(() => {
    const fetchProperty = async () => {
      const res = await fetch(`/properties/${id}`);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperty(json);
    }

    fetchProperty()
  }, []);
  const address = property.full_address;
  let searchableAddress = address ? address.replaceAll(' ', '+') : 'Loading...';

  return (
    <Box mx={2}>
      <Typography variant='h2'>{property.name}</Typography>
      <Typography sx={{ fontSize: 14 }} color='text.primary' mb={1}>{property.full_address}</Typography>
      <PropertyGallery mainImg={property.image_url}/>
      <SectionTitle title='Description' />
      {property.description}
      <SectionTitle title='Contact' />
      <Typography variant='body1'>
        Website: <a href={property.website} target='_blank'>{property.website}</a><br />
        Phone Number: {property.phone_number} <br />
        Address: <a href={`http://maps.google.com/maps?q=${searchableAddress}`} target='_blank'>{property.full_address}</a>
      </Typography>
      <SectionTitle title='Pet Information' />
      <Typography variant='body1'>
        Number of Pets Allowed: {property.pet_limit} <br />
        Dogs Allowed: {property.dogs_allowed ? 'Yes' : 'No'} <br />
        Dogs Restrictions: {property.dog_restrictions} <br />
        Monthly Dog Fee: {property.dog_fee === 0 ? 'None' : `$${property.dog_fee}`} <br />
        One-Time Dog Deposit: {property.dog_deposit === 0 ? 'None' : `$${property.dog_deposit}`} <br />
        Cats Allowed: {property.cats_allowed ? 'Yes' : 'No'} <br />
        Cats Restrictions: {property.cat_restrictions} <br />
        Monthly Cat Fee: {property.cat_fee === 0 ? 'None' : `$${property.cat_fee}`} <br />
        One-Time Cat Deposit: {property.cat_deposit === 0 ? 'None' : `$${property.cat_deposit}`} <br />
        Please contact the property for more information.
      </Typography>
      <SectionTitle title='Standard Fees' />
      <Typography variant='body1'>
        Admin: {property.admin_fee === 0 ? 'None' : `$${property.admin_fee}`} <br />
        Application: {property.application_fee === 0 ? 'None' : `$${property.application_fee}`} <br />
      </Typography>
    </Box>
  )
}

export default PropertyPage;