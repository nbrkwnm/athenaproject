import React from 'react';
import { StyleSheet } from 'react-native';

import { Container, ProfilePicture, ProfileInfo, ProfileName, ProfileUser } from './styles';

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

const ProfileHeader = () => {
  return (
  <Container style={styles.shadow}>
    <ProfilePicture/>
        <ProfileInfo>
          <ProfileName numberOfLines={2}>
            Murilo N. H. Kawanami
          </ProfileName>
          <ProfileUser numberOfLines={1}>
            @teste
          </ProfileUser>
        </ProfileInfo>
  </Container>
  );
}

export default ProfileHeader;