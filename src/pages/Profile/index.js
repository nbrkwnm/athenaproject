import React from 'react';
import { StyleSheet } from 'react-native';

import { Container, ProfileScroll } from './styles';

import ProfileHeader from '../../components/ProfileHeader';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})

const Profile = () => {
  return(
    <Container>
      <ProfileHeader styles={styles.shadow}/>

      <ProfileScroll>
      </ProfileScroll>
    </Container>
  );
}

export default Profile;