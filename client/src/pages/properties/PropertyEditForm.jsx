import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Box, FormControl, FormLabel, Button, TextField, FormControlLabel, InputAdornment, Radio, RadioGroup, Typography } from '@mui/material';
import SectionTitle from '../../components/SectionTitle';
import { useParams, useNavigate } from 'react-router-dom';

const PropertyEditForm = ({ onPropertyEdit }) => {
  const { user } = useContext(UserContext);
  let { id } = useParams();
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  // properties/:id fetch request
  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      const res = await fetch(`/properties/${id}`);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperty(json);
    }

    fetchProperty()
    setLoading(false);

  }, [id]);

useEffect(() => {
  const initialState = {
    name: property.name || '', 
    image_url: property.image_url || '',
    website: property.website || '',
    phone_number: property.phone_number || '',
    address_line_one: property.address_line_one || '',
    address_line_two: property.address_line_two || '',
    city: property.city || '',
    state: property.state || '',
    zip: property.zip || '',
    description: property.description || '',
    pet_limit: property.pet_limit || '',
    dogs_allowed: property.dogs_allowed || false,
    dog_restrictions: property.dog_restrictions || '',
    dog_fee: property.dog_fee || '',
    dog_deposit: property.dog_deposit || '',
    cats_allowed: property.cats_allowed || false,
    cat_restrictions: property.cat_restrictions || '',
    cat_fee: property.cat_fee || '',
    cat_deposit: property.cat_deposit || '', 
    application_fee: property.application_fee || '',
    admin_fee: property.admin_fee|| '',
    affordability: property.affordability || ''
  };
  setFormData(initialState);
}, [property]);

const [formData, setFormData] = useState({});

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/properties/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setErrors([])
            onPropertyEdit(data)
            navigate('/profile')
          })
        } else if (res.status === 401) {
          setErrors(['Not Authorized'])
        } else {
          res.json().then(errorData => setErrors(errorData.errors))
        }
      })
  } 

  return (
    <>
      { (!user || !user.is_manager) ? <Typography variant='body1' mx={2}>Not Authorized.</Typography> :
      <Box mx={2} mt={5} sx={{ display: 'flex' }}>
        { loading ? <div>Loading...</div> :
          <FormControl component='form' sx={{ display: 'flex', width: '400px'  }} onSubmit={handleSubmit}>
            <SectionTitle title='EDIT PROPERTY' />
            <Typography variant='h3' my={2}>Property Information</Typography>
              <FormLabel>Property Classification</FormLabel>
              <RadioGroup row name='affordability' value={formData.affordability} onChange={handleInputChange}>
                <FormControlLabel value='affordable' control={<Radio />} label='Affordable' />
                <FormControlLabel value='midrange' control={<Radio />} label='Mid Range' />
                <FormControlLabel value='luxury' control={<Radio />} label='Luxury' />
              </RadioGroup>
              <TextField 
                required
                fullWidth
                margin='dense' 
                label='Property Name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                multiline
                minRows={4}
                maxRows={4}
                margin='dense' 
                label='Description'
                name='description'
                value={formData.description}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                margin='dense' 
                label='Property Website'
                name='website'
                value={formData.website}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                type='number'
                margin='dense' 
                label='Property Phone Number'
                name='phone_number'
                value={formData.phone_number}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                margin='dense' 
                label='Address Line One'
                name='address_line_one'
                value={formData.address_line_one}
                onChange={handleInputChange}
              />
              <TextField 
                fullWidth
                margin='dense'  
                label='Address Line Two'
                name='address_line_two'
                value={formData.address_line_two}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                margin='dense'  
                label='City'
                name='city'
                value={formData.city}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                margin='dense'  
                label='State'
                name='state'
                value={formData.state}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                type='number'
                margin='dense'  
                label='Zip Code'
                name='zip'
                value={formData.zip}
                onChange={handleInputChange}
              />
              <TextField 
                required
                fullWidth
                margin='dense'  
                label='Default Property Image URL'
                name='image_url'
                value={formData.image_url}
                onChange={handleInputChange}
              />
              <Typography variant='h3' my={2}>Pet Information</Typography>
              <FormLabel>Dogs Allowed?</FormLabel>
              <RadioGroup row name='dogs_allowed' value={formData.dogs_allowed} onChange={handleInputChange}>
                <FormControlLabel value={true} control={<Radio />} label='Yes' />
                <FormControlLabel value={false} control={<Radio />} label='No' />
              </RadioGroup>
              <TextField 
                fullWidth
                multiline
                minRows={4}
                maxRows={4}
                margin='dense'  
                label='Dog Restrictions'
                name='dog_restrictions'
                value={formData.dog_restrictions}
                onChange={handleInputChange}
              />
              <TextField 
                fullWidth
                type='number'
                margin='dense'  
                label='Monthly Dog Fee'
                name='dog_fee'
                value={formData.dog_fee}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
              />
              <TextField 
                fullWidth
                type='number'
                margin='dense'  
                label='Dog Deposit'
                name='dog_deposit'
                value={formData.dog_deposit}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
              />
              <FormLabel>Cats Allowed?</FormLabel>
              <RadioGroup row name='cats_allowed' value={formData.cats_allowed} onChange={handleInputChange}>
                <FormControlLabel value={true} control={<Radio />} label='Yes' />
                <FormControlLabel value={false} control={<Radio />} label='No' />
              </RadioGroup>
              <TextField 
                  fullWidth
                  multiline
                  minRows={4}
                  maxRows={4}
                  margin='dense'  
                  label='Cat Restrictions'
                  name='cat_restrictions'
                  value={formData.cat_restrictions}
                  onChange={handleInputChange}
              />
              <TextField 
                fullWidth
                type='number'
                margin='dense'  
                label='Monthly Cat Fee'
                name='cat_fee'
                value={formData.cat_fee}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
              />
              <TextField 
                fullWidth
                type='number'
                margin='dense'  
                label='Cat Deposit'
                name='cat_deposit'
                value={formData.cat_deposit}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
              />
              <TextField 
                fullWidth
                type='number'
                margin='dense'  
                label='Pet Limit'
                name='pet_limit'
                value={formData.pet_limit}
                onChange={handleInputChange}
              />
              <Typography variant='h3' my={2}>Additional Fees</Typography>
              <TextField 
                required
                fullWidth
                type='number'
                margin='dense'  
                label='Admin Fee'
                name='admin_fee'
                value={formData.admin_fee}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
              />
              <TextField 
                required
                fullWidth
                type='number'
                margin='dense'  
                label='Application Fee'
                name='application_fee'
                value={formData.application_fee}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
              />


            {(Array.isArray(errors) && errors.length > 0) && (
              <ul>
                {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
              </ul>
              )
            }
            <Button type='submit' variant='contained' color='secondary' sx={{ margin: 3 }}>Save</Button> 
          </FormControl>
        }
      </Box>
      }
    </>
  )
}

export default PropertyEditForm;