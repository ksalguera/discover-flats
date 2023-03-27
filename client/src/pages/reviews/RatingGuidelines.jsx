import { Stack, FormLabel } from '@mui/material';
import RatingGuidelinesLabel from './RatingGuidelinesLabel';

const RatingGuidelines = () => {
  return (
    <>
      <FormLabel>Rating Guidelines</FormLabel>
        <Stack mb={2}>
          <RatingGuidelinesLabel title='Highly Recommended' value={5} />
          <RatingGuidelinesLabel title='Above Average' value={4} />
          <RatingGuidelinesLabel title='Average' value={3} />
          <RatingGuidelinesLabel title='Below Average' value={2} />
          <RatingGuidelinesLabel title='Would Not Recommend' value={1} />
        </Stack>
    </>
  )
}

export default RatingGuidelines;