import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Container, GroupEventScroll, EventFeedBar, EventGroupTitle} from './styles';
import {} from 'react-native-gesture-handler';

import EventCards from '../../components/EventCards'; 

const Feed = () => {
  return (
    <Container>
      <EventFeedBar>
        <EventGroupTitle>
          Seus Eventos
        </EventGroupTitle>
        <GroupEventScroll>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
        </GroupEventScroll>
      </EventFeedBar>
      
      <EventFeedBar>
        <EventGroupTitle>
          Próximo de você
        </EventGroupTitle>
        <GroupEventScroll>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
        </GroupEventScroll>
      </EventFeedBar>
      
      <EventFeedBar>
        <EventGroupTitle>
          Você pode gostar
        </EventGroupTitle>
        <GroupEventScroll>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
          <EventCards/>
        </GroupEventScroll>
      </EventFeedBar>
    </Container>
);
}

export default Feed;