import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, FormControl, Button, Link, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import UserContext from '../../contexts/UserContext';
import { FavoriteContext } from '../../contexts/FavoriteContext';
import SectionTitle from '../../components/SectionTitle';

const Login = () => {
  const initialState = { username: '', password: '' };
  const { user, setUser } = useContext(UserContext);
  const { setFavorites } = useContext(FavoriteContext);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  
  const fetchFavorites = async () => {
    const res = await fetch('/favorites');
    if (!res.ok) throw new Error(res.statusText);
    const json = await res.json();
    setFavorites(json);
    navigate('/')
  }

  const handleInputChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setUser(data)
            setErrors(null)
            fetchFavorites()
          })
        } else {
          res.json().then(errorData => setErrors(errorData.errors))
        }
      })

    setFormData(initialState);
  }

  return (
    <>
      { !user ?
        <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper sx={{ bgcolor: grey[100], display: 'flex', justifyContent: 'center', maxWidth: 600, paddingY: 4, paddingX: 8 }}>
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
                type='password'
                margin='normal' 
                label='Password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors && (<ul><li style={{color: 'red'}}>{errors}</li></ul>)}
              <Button type='submit' variant='contained' color='secondary' sx={{ margin: 3 }}>LOGIN</Button>
              <Typography>Need an account? <Link href='/signup'>SIGN UP</Link></Typography>  
            </FormControl>
          </Paper>
        </Box>
        :
        <Typography variant='body1' mx={2}>Currently logged In.</Typography>
      }
    </>
  )
}

export default Login;