import { useContext } from 'react';
import { Box, Stack, Typography, Rating, Divider } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import UserContext from '../../contexts/UserContext';
import { ReviewContext } from '../../contexts/ReviewContext';

const Ratings = () => {
  const { user } = useContext(UserContext);
  const { reviews } = useContext(ReviewContext);

  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
 
  return (
    <>
      { !user ? <Typography variant='body1' mx={2}>Not Authorized.</Typography> :
      <Box mx={2}>
        <PageTitle title='Reviewed Properties' />
        { reviews.length === 0 ? <h3>No Results Found</h3> 
          : 
          <>
          { reviews.map(review => {
            const date = new Date(review.created_at);
            const formattedDate = date.toLocaleDateString('en-US', options);

            return (
              <Box mb={2} key={review.id}>
                <Typography variant='h4'>{review.property.name}</Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Rating value={review.rating} size='small' readOnly />
                  <Typography variant='subtitle1'>{review.rating}/5</Typography>
                </Stack>
                <Typography variant='body1'>{review.description}</Typography>
                <Typography variant='caption'>{formattedDate}</Typography>
                <Divider light />            
              </Box>
            )
            })}
          </>
        }
      </Box>
      }
    </>
  )
}

export default Ratings;
