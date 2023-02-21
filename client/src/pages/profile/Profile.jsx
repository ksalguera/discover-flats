import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Box } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';
import PropertyManager from './PropertyManager';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <Box mx={2}>
      { user === null ?
        <div>Not Authorized.</div>
        : 
        <>
          <PageTitle title={`Welcome, ${user.greeting}`} />
          <SectionTitle title='Personal Information' />
          <p>Username: {user.username}</p>
          <p>Display Message: {user.greeting}</p>
          <p>Email: {user.email}</p>
          { user.is_manager && <PropertyManager />}
        </>
      }
    </Box>
  )
}

export default Profile;