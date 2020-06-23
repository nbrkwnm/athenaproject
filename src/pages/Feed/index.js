import React from 'react';
import { ScrollView } from 'react-native';
import { Container, EventFeedBar, EventGroupTitle} from './styles';

import EventCards from '../../components/EventCards'; 

const Feed = () => {
  return (
    <Container>
      <EventFeedBar>
        <EventGroupTitle>
          Teste
        </EventGroupTitle>
        <ScrollView 
          horizontal={true}
        >
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
        </ScrollView>
      </EventFeedBar>
      <EventFeedBar>
        <EventGroupTitle>
          Teste 2
        </EventGroupTitle>
        <ScrollView 
          horizontal={true}
        >
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
        </ScrollView>
      </EventFeedBar>
      <EventFeedBar>
        <EventGroupTitle>
          Teste 3
        </EventGroupTitle>
        <ScrollView 
          horizontal={true}
        >
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
        </ScrollView>
      </EventFeedBar>
    </Container>
  );
  
}

export default Feed;