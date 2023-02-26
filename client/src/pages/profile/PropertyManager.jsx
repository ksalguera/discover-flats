import React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const PropertyManager = ({ properties }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log('working')
  }

  const handleDelete = () => {
    console.log('working')
  }

  const ownedProperties = properties.filter(property => property.user_id === user.id)

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <SectionTitle title='Property Manager Dashboard' />
        <Button color='secondary' size='small' onClick={() => navigate('/properties/new')}><AddIcon />Add a Property</Button>
      </Stack>
      { !ownedProperties ? <Typography variant='body1'>No Properties Available</Typography>
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
                      <Button color='success' variant='outlined' size='small' onClick={handleEdit}>Edit</Button>
                      <Button color='error' variant='outlined' size='small' onClick={handleDelete}>Delete</Button>
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