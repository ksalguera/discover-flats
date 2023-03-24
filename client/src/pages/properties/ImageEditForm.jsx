import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Box, Stack, IconButton, FormControl, Button, TextField, Typography, Icon } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const ImageEditForm = () => {
  const { user } = useContext(UserContext);
  let { id } = useParams();
  const [property, setProperty] = useState({});
  const [errors, setErrors] = useState([]);

  // properties/:id fetch request
  useEffect(() => {
    const fetchProperty = async () => {
      const res = await fetch(`/properties/${id}`);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperty(json);
    }
    fetchProperty()
  }, [id]);
 
  // set initial form data
  const [formData, setFormData] = useState({ property_id: '', image_url: '' });
  useEffect(() => setFormData({...formData, property_id: property.id}), [property])
 
  // handle input changes for additional images
  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});
 
  // delete image and update property state
  const handleImageDelete = async (id) => {
    const res = await fetch(`/images/${id}`, { method: 'DELETE' });
    if (res.ok) { 
      setErrors([])
      const updatedImages = property.images?.filter(image => image.id !== id);
      const updatedPropety = {...property, images: updatedImages};
      setProperty(updatedPropety);
    } else {
      res.json().then(errorData => setErrors(errorData.errors))
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(newImage => {
            setErrors([])
            setProperty({...property, images: [...property.images, newImage]})
            setFormData({ property_id: '', image_url: '' })
          })
        } else {
          res.json().then(errorData => setErrors(errorData.errors))
        }
      })
  } 

  return (
    <>
      { (!user || !user.is_manager) ? <Typography variant='body1' mx={2}>Not Authorized.</Typography> :
      <Box mx={2}>
        <>
          <PageTitle title='MANAGE IMAGES' />
          { property.images?.length === 0 ? <Typography variant='body1'>No Images Available</Typography> : 
          <>
          <Stack mt={2} spacing={3}>
          {
            property.images?.map(image => {
              return (
                <Stack direction='row' spacing={3} alignItems='center' key={image.id}>
                  <PhotoIcon />
                  <Typography variant='body1'> <a href={image.image_url} target='_blank'>Image</a></Typography>
                  <IconButton onClick={() => handleImageDelete(image.id)}><CloseIcon /></IconButton>
                </Stack>
              )
            })
          }
          </Stack>
          </>
          }

          <FormControl component='form' sx={{ display: 'flex', width: '500px' }} onSubmit={handleSubmit}>
            <Stack direction='row' spacing={3} alignItems='center'>
                <TextField 
                  required
                  fullWidth
                  margin='normal'  
                  label='Additional Image'
                  name='image_url'
                  value={formData.image_url}
                  onChange={handleInputChange}
                />
                {property.images?.length <= 3 ? 
                <Button type='submit' variant='contained' color='secondary'>Add</Button>
                :
                <Button type='submit' variant='contained' color='secondary' disabled>Add</Button>
                }
            </Stack>
          </FormControl>

          {(Array.isArray(errors) && errors.length > 0) && (
            <ul>
              {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
            </ul>
            )
          }
        </>   
      </Box>
      }
    </>
  )
}

export default ImageEditForm;