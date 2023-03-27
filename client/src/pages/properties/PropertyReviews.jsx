import { useContext } from 'react';
import { Box, Divider, Rating, Typography } from '@mui/material';
import UserContext from '../../contexts/UserContext';

const PropertyReviews = ({ reviews }) => {
  const { user } = useContext(UserContext);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  return (
    <>
      { reviews && reviews.length > 0 
        ? reviews.map(review => {
          const date = new Date(review.created_at);
          const formattedDate = date.toLocaleDateString('en-US', options);

          return (
            <Box key={review.id} my={2}>
              <Rating value={review.rating} size='small' readOnly />
              <Typography>{review.description}</Typography>
              <Typography variant='caption'>{formattedDate}</Typography>
              { user && (review.user_id === user.id) && <Typography variant='caption' color='secondary'> (Created By You)</Typography> }
              <Divider light />
            </Box>
          )
          })
        : <Typography variant='h5'>No Reviews.</Typography>
      }
    </>
  )
}

export default PropertyReviews;