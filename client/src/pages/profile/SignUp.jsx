import { useState } from 'react'
import { Box, Paper, FormControl, Button, Link, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import SectionTitle from '../../components/SectionTitle';

const SignUp = () => {
  const initialState = { 
    username: '', 
    greeting: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData)
    setFormData(initialState);
  } 

  return (
    <Box mx={2} mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ bgcolor: grey[100], display: 'flex', justifyContent: 'center', maxWidth: 600, paddingY: 4, paddingX: 8 }}>
        <FormControl component='form' onSubmit={handleSubmit}>
          <SectionTitle title='SIGN UP' />
          <TextField 
            required
            margin='normal' 
            label='Username'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField 
            required
            margin='normal' 
            label='First Name'
            name='greeting'
            value={formData.greeting}
            onChange={handleInputChange}
          />
          <TextField 
            required
            margin='normal' 
            label='Email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            required
            margin='normal' 
            label='Password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            required
            margin='normal' 
            label='Confirm Password'
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleInputChange}
          />
          <Button type='submit' variant='contained' color='secondary' sx={{ margin: 3 }}>SIGN UP</Button>
          <Typography>Already have an account? <Link href='#'>LOGIN</Link></Typography>  
        </FormControl>
      </Paper>
    </Box>
  )
}

export default SignUp;