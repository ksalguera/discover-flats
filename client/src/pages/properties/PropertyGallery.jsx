import { useMode } from '../../contexts/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/material';


const PropertyGallery = ({ mainImg }) => {
  // conditional display based on page size
  const [theme] = useMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  
  return (
    <>
      { isMobile ? <img id='propertyPageMobileImg' src={mainImg} /> :
        <Stack direction='row' spacing={1} mb={2}>
          <img id='propertyPageImg' src={mainImg} />
          <Stack spacing={1}>
            <img id='propertyPageSummaryImg' src={mainImg} />
            <img id='propertyPageSummaryImg' src={mainImg} />
          </Stack>
          <Stack spacing={1}>
            <img id='propertyPageSummaryImg' src={mainImg} />
            <img id='propertyPageSummaryImg' src={mainImg} />
          </Stack>
        </Stack>
      }
    </>
  )
}

export default PropertyGallery;