import theme from '../../contexts/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/material';


const PropertyGallery = ({ mainImg, images }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const imgArray = images ? images.map(image => image.image_url) : null;
  const placeholderImg = 'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';
  
  return (
    <>
      { isMobile ? <img id='propertyPageMobileImg' src={mainImg} /> :
        ( !images ? <p>Loading</p> : <Stack direction='row' spacing={1} mb={2}>
          <img id='propertyPageImg' src={mainImg} />
          <Stack spacing={1}>
            <img id='propertyPageSummaryImg' src={imgArray[0] ? imgArray[0] : placeholderImg } />
            <img id='propertyPageSummaryImg' src={imgArray[1] ? imgArray[1] : placeholderImg } />
          </Stack>
          <Stack spacing={1}>
            <img id='propertyPageSummaryImg' src={imgArray[2] ? imgArray[2] : placeholderImg} />
            <img id='propertyPageSummaryImg' src={imgArray[3] ? imgArray[3] : placeholderImg} />
          </Stack>
        </Stack>)
      }
    </>
  )
}

export default PropertyGallery;