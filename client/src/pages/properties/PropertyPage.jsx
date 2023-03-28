import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Breadcrumbs, Link, Typography, Rating } from '@mui/material';
import UserContext from '../../contexts/UserContext';
import PropertyGallery from './PropertyGallery';
import PropertyReviews from './PropertyReviews';
import ReviewForm from '../reviews/ReviewForm';
import SectionTitle from '../../components/SectionTitle';
import NotFound from '../../components/NotFound';


const PropertyPage = () => {
  let { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true)
      const res = await fetch(`/properties/${id}`);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setProperty(json);
    }
    fetchProperty().catch(error => error.message)
    setLoading(false)
 
  }, []);

  const searchableAddress = property.full_address ? property.full_address.replaceAll(' ', '+') : '';
  const formattedPhone = property.phone_number ? property.phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : '';
  
  const handleReviewAdd = newReview => {
    const updatedReviews = [newReview, ...property.reviews];
    setProperty({...property, reviews: updatedReviews })
  }

  let count = 0
  let total = 0
  property.reviews?.map(review => {
    count += 1
    total += review.rating
  })
  const avg = Math.round(total / count)

  return (
    <>
      { property.length === 0 ? <NotFound /> : 

    <Box mx={2} mb={5}>
      <Breadcrumbs separator='›' aria-label='breadcrumb' mb={2}>
        <Link onClick={() => navigate('/properties')}>Properties</Link>
        <Typography color='text.primary'>{property.name}</Typography>
      </Breadcrumbs>
      <Typography variant='h2'>{property.name}</Typography> 
      <Typography sx={{ fontSize: 14 }} color='text.primary' mb={1}>
        <Rating value={avg} size='small' readOnly /> ({property.reviews.length}) <br />
        {property.full_address}
      </Typography>
      <PropertyGallery mainImg={property.image_url} images={property.images} />
      <SectionTitle title='Description' />
      {property.description}
      <SectionTitle title='Contact' />
      <Typography variant='body1'>
        Website: <a href={property.website} target='_blank'>{property.website}</a><br />
        Phone Number: {formattedPhone} <br />
        Address: <a href={`http://maps.google.com/maps?q=${searchableAddress}`} target='_blank'>{property.full_address}</a>
      </Typography>
      <SectionTitle title='Pet Information' />
      <Typography variant='body1'>
        Dogs Allowed: {property.dogs_allowed ? 'Yes' : 'No'} <br />
        Dogs Restrictions: {!property.dog_restrictions ? 'None' : property.dog_restrictions} <br />
        Monthly Dog Fee: {!property.dog_fee ? 'None' : `$${property.dog_fee}`} <br />
        One-Time Dog Deposit: {!property.dog_deposit ? 'None' : `$${property.dog_deposit}`} <br />
        Cats Allowed: {property.cats_allowed ? 'Yes' : 'No'} <br />
        Cats Restrictions: {!property.cat_restrictions ? 'None' : property.cat_restrictions} <br />
        Monthly Cat Fee: {!property.cat_fee ? 'None' : `$${property.cat_fee}`} <br />
        One-Time Cat Deposit: {!property.cat_deposit ? 'None' : `$${property.cat_deposit}`} <br />
        Number of Pets Allowed: {property.pet_limit} <br />
        Please contact the property for more information.
      </Typography>
      <SectionTitle title='Standard Fees' />
      <Typography variant='body1'>
        Admin: {`$${property.admin_fee}`} <br />
        Application: {`$${property.application_fee}`} <br />
      </Typography> 
      { user && property && <ReviewForm propertyId={property.id} onReviewAdd={handleReviewAdd} /> }
      <SectionTitle title='All Reviews' />
      <PropertyReviews reviews={property.reviews} />
    </Box>

      }
    </>
  )
}

export default PropertyPage;