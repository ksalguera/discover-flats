import React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const PropertyManager = ({ properties, onPropertyDelete }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const ownedProperties = properties.filter(property => property.user_id === user.id)

  const handleEdit = () => {
    console.log('working')
  }

  const handleDelete = (id) => {
    const deleteProperty = async () => {
      const res = await fetch(`/properties/${id}`, { method: 'DELETE' });
      if (res.ok) { onPropertyDelete(id)}
    }
    deleteProperty();
  }

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <SectionTitle title='Property Manager Dashboard' />
        <Button color='secondary' size='small' onClick={() => navigate('/properties/new')}><AddIcon />Add a Property</Button>
      </Stack>
      { ownedProperties.length === 0 ? <Typography variant='body1'>No Properties Available</Typography>
        : 
        <>
          <Stack mt={2} spacing={3}>
          {
            ownedProperties.map(property => {
              return (
                <Stack direction='row' spacing={3} key={property.id}>
                  <Typography variant='h3'><ApartmentIcon /> {property.name}</Typography>
                    <Stack direction='row' spacing={1}>
                      <Button color='secondary' variant='outlined' size='small' onClick={() => navigate(`/properties/${property.id}`)}>View</Button>
                      <Button color='success' variant='outlined' size='small' onClick={() => navigate(`/properties/${property.id}/edit`)}>Edit</Button>
                      <Button color='success' variant='outlined' size='small' onClick={() => navigate(`/properties/${property.id}/images`)}>Manage Photos</Button>
                      <Button color='error' variant='outlined' size='small' onClick={() => handleDelete(property.id)}>Delete</Button>
                  </Stack>
                </Stack>
              )
            })
          }
          </Stack>
        </>
      }
    </>
  )
}

export default PropertyManager;