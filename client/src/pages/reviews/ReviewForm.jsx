import { useState, useContext } from 'react';
import { Box, FormControl, FormControlLabel, Rating, TextField, Button } from '@mui/material';
import SectionTitle from '../../components/SectionTitle';
import RatingGuidelines from './RatingGuidelines';
import UserContext from '../../contexts/UserContext';
import { ReviewContext } from '../../contexts/ReviewContext';

const ReviewForm = ({ propertyId, onReviewAdd }) => {
  const { user } = useContext(UserContext);
  const { reviews, setReviews } = useContext(ReviewContext);
  const [formData, setFormData] = useState({ rating: 0, description: '' });
  const [errors, setErrors] = useState([]);

  const handleInputChange = e => {
    if (e.target.name === 'rating') {
      setFormData({...formData, [e.target.name]: parseInt(e.target.value)})
    } else {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const res = await fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...formData, property_id: propertyId, user_id: user.id }),
    });
  
    if (res.ok) {
      const data = await res.json();
      setErrors([]);
      onReviewAdd(data);
      setReviews([data, ...reviews]);
      setFormData({ rating: 0, description: '' })
    } else {
      const errorData = await res.json();
      setErrors(errorData.errors);
    }
  } 

  return (
    <Box>
      <SectionTitle title='Leave Review' />
      <FormControl component='form' fullWidth onSubmit={handleSubmit}>
        <RatingGuidelines />
        <Box>
          <FormControlLabel 
            control={<Rating name='rating' value={formData.rating} onChange={handleInputChange} />}
            label={<Box sx={{ mr: 1 }}>Your Rating</Box>}
            labelPlacement='start'
            sx={{ p: 0, mx: 0, mb: 1 }}
          />
        </Box>
        <TextField
          required
          multiline
          rows={5}
          name='description'
          value={formData.description}
          onChange={handleInputChange}
        />
        <Button type='submit' color='secondary' variant='contained' sx={{ mt: 2, width: 100 }} >Submit</Button>
      </FormControl>
      { Array.isArray(errors) && errors.length > 0 && 
        (
          <ul>
            { errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>) }
          </ul>
        )
      }
    </Box>
  );
}

export default ReviewForm;
