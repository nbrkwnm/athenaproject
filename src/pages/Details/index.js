import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { Container, EventHeader, EventTitle, EventDescription } from './styles';

import eventThumbnail from '../../assets/event_thumbnail.jpg';

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

const Details = () => {
  return (
    <Container>
      <EventHeader style={styles.shadow}/>
      <Image 
        source={eventThumbnail}
        style={{
          maxHeight: (Dimensions.get('window').width * 0.5625)
        }}
      />
      <EventTitle>
        Teste
      </EventTitle>
    </Container>
  );
}
  
export default Details;