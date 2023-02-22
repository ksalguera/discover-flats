import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Box, Paper, FormControl, Button, Link, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import SectionTitle from '../../components/SectionTitle';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const initialState = { 
    username: '', 
    greeting: '',
    email: '',
    is_manager: false,
    password: '',
    password_confirmation: '',
  }
  
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(initialState);
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const handleCheckedChange = e => {
    setChecked(e.target.checked)
    setFormData({...formData, is_manager: e.target.checked})
  }

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
            setUser(data)
            setErrors([])
            navigate('/')
          })
        } else {
          res.json().then(errorData => setErrors(errorData.errors))
        }
      })
    
    // clears form inputs after submit
    setFormData(initialState);
    setChecked(false);
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
            type='password'
            margin='normal' 
            label='Password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            required
            type='password'
            margin='normal' 
            label='Confirm Password'
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheckedChange} />} 
            label='Select this box if you are a property manager'
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