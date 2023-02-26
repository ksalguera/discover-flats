import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Box, FormControl, FormLabel, Button, TextField, FormControlLabel, InputAdornment, Radio, RadioGroup, Typography } from '@mui/material';
import SectionTitle from '../../components/SectionTitle';
import { useNavigate } from 'react-router-dom';

const PropertyForm = () => {
  const { user } = useContext(UserContext);
  const initialState = { 
    name: '', 
    image_url: '',
    website: '',
    phone_number_unformatted: '',
    address_line_one: '',
    address_line_two: '',
    city: '',
    state: '',
    zip: '',
    description: '',
    pet_limit: '',
    dogs_allowed: null,
    dog_restrictions: '',
    dog_fee: '',
    dog_deposit: '',
    cats_allowed: null,
    cat_restrictions: '',
    cat_fee: '',
    cat_deposit: '', 
    application_fee: '',
    admin_fee: '',
    affordability: ''
  }

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = e => {
    const parsedValue = isNaN(e.target.value) ? e.target.value : parseFloat(e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setErrors([])
            // navigate('/')
          })
        } else {
          res.json().then(errorData => setErrors(errorData.errors))
        }
      })
    
    // clears form inputs after submit
    console.log(formData)
    setFormData(initialState);
  } 

  return (
    <>
      { !user ? <Typography variant='body1' mx={2}>Not Authorized.</Typography> :
      <Box mx={2} mt={5} sx={{ display: 'flex' }}>
          <FormControl component='form' sx={{ display: 'flex', width: '400px'  }} onSubmit={handleSubmit}>
            <SectionTitle title='ADD A PROPERTY' />
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
                name='phone_number_unformatted'
                value={formData.phone_number_unformatted}
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
                required
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


            {errors.length > 0 && (
              <ul>
                {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
              </ul>
              )
            }
            <Button type='submit' variant='contained' color='secondary' sx={{ margin: 3 }}>Add Property</Button> 
          </FormControl>
      </Box>
      }
    </>
  )
}

export default PropertyForm;