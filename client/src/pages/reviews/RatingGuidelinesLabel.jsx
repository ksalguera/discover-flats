import { FormLabel, FormControlLabel, Rating } from '@mui/material';

const RatingGuidelinesLabel = ({ title, value }) => {
  return (
    <FormControlLabel 
      control={<Rating value={value} size='small' readOnly />}
      label={<FormLabel sx={{ ml: 1 }}>{title}</FormLabel>}
      sx={{ pl: 1}}
    />
  )
}

export default RatingGuidelinesLabel;