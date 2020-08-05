import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ProfilePicture, ProfileInfo, ProfileName, ProfileUser, ButtonText } from './styles';

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
  },
  button: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#0073ff",
    padding: 5,
    borderRadius: 5,
  }
})

const ProfileHeader = () => {
  return (
  <Container style={styles.shadow}>
    <ProfilePicture>
      <Icon name='camera-alt' size={25} color='#000'/>
    </ProfilePicture>
    <ProfileInfo>
      <ProfileName numberOfLines={1}>
        Murilo N. H. Kawanami
      </ProfileName>
      <ProfileUser numberOfLines={1}>
        @teste
      </ProfileUser>
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
      >
        <ButtonText>
          Editar Perfil
        </ButtonText>
      </TouchableOpacity>

    </ProfileInfo>
  </Container>
  );
}

export default ProfileHeader;