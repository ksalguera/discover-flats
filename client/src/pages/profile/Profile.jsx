import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Box, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';
import PropertyManager from './PropertyManager';

const Profile = ({properties}) => {
  const { user } = useContext(UserContext);

  return (
    <>
      { !user ? <Typography variant='body1' mx={2}>Not Authorized.</Typography> :
      <Box mx={2}>
        <PageTitle title={`Welcome, ${user.greeting}`} />
        <SectionTitle title='Personal Information' />
        <p>Username: {user.username}</p>
        <p>Display Message: {user.greeting}</p>
        <p>Email: {user.email}</p>
        { user.is_manager && <PropertyManager properties={properties} />}
      </Box>
      }
    </>
  )
}

export default Profile;