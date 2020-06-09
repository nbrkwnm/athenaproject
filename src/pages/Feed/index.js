import React from 'react';
import { Container } from './styles';

import EventCards from '../../components/EventCards'; 

const Feed = () => {
  return (
    <Container> 
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
        <EventCards/>
    </Container>
  );
  
}

export default Feed;