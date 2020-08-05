import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Container, ProfileScroll, Title, Subtitle, Line, LogoutButtonText } from './styles';

import ProfileHeader from '../../components/ProfileHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    marginTop: 200,
    marginBottom: 50,
    alignItems: "center",
    backgroundColor: "#0073FF",
    padding: 10,
    borderRadius: 5,
  }
})

const Profile = () => {
  return(
    <Container>
      <ProfileHeader styles={styles.shadow}/>
      <ProfileScroll showsVerticalScrollIndicator={false}>
        <Title>
          Nome completo
        </Title>
        <Subtitle numberOfLines={1}>
          Murilo N. H. Kawanami
        </Subtitle>

        <Line />

        <Title>
          Curso
        </Title>
        <Subtitle numberOfLines={1}>
          Ciência da Computação
        </Subtitle>

        <Line />
        
        <Title>
          Instituição
        </Title>
        <Subtitle numberOfLines={1}>
          UFMT
        </Subtitle>

        <Line />
        
        <Title>
          Cidade
        </Title>
        <Subtitle numberOfLines={1}>
          Cuiabá
        </Subtitle>
        <Line />
        
        <Title>
          E-mail
        </Title>
        <Subtitle numberOfLines={1}>
          noboru.kawanami@gmail.com
        </Subtitle>

        <Line />
        
        <Title>
          Telefone
        </Title>
        <Subtitle numberOfLines={1}>
          (65) 98155-5222
        </Subtitle>
        
        <Line />
        
        <Title>
          Idade
        </Title>
        <Subtitle numberOfLines={1}>
          22
        </Subtitle>

        <TouchableOpacity
          style={[styles.button, styles.shadow]}
        >
          <LogoutButtonText>
            Logout
          </LogoutButtonText>
        </TouchableOpacity>

      </ProfileScroll>
    </Container>
  );
}

export default Profile;