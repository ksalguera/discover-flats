import { useState } from 'react'
import { Box, Paper, FormControl, Button, Link, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import SectionTitle from '../../components/SectionTitle';

const Login = () => {
  const initialState = { username: '', password: '' };
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData)
    setFormData(initialState);
  } 

  return (
    <Box mx={2} mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ bgcolor: grey[100], display: 'flex', justifyContent: 'center', maxWidth: 600, paddingY: 4, paddingX: 10 }}>
        <FormControl component='form' onSubmit={handleSubmit}>
          <SectionTitle title='LOGIN' />
          <TextField 
            margin='normal' 
            label='Username'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField 
            margin='normal' 
            label='Password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button type='submit' variant='contained' color='secondary' sx={{ margin: 3 }}>LOGIN</Button>
          <Typography>Need an account? <Link href='#'>SIGN UP</Link></Typography>  
        </FormControl>
      </Paper>
    </Box>
  )
}

export default Login;