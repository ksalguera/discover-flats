import { useState } from 'react'
import { Box, Paper, FormControl, Button, Link, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import SectionTitle from '../../components/SectionTitle';

const SignUp = ({ onSetUser }) => {
  const initialState = { 
    username: '', 
    greeting: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            onSetUser(data)
            setErrors([])
          })
        } else {
          res.json().then(errorData => setErrors(errorData.errors))
        }
      })
    
    // clears form inputs after submit
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
          {errors.length > 0 && (
            <ul>
              {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
            </ul>
            )
          }
          <Button type='submit' variant='contained' color='secondary' sx={{ margin: 3 }}>SIGN UP</Button>
          <Typography>Already have an account? <Link href='/login'>LOGIN</Link></Typography>  
        </FormControl>
      </Paper>
    </Box>
  )
}

export default SignUp;