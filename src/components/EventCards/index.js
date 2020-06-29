import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, CardImage, CardTitle, CardDescription, CardFooter, CardFooterDate, CardFooterSchedule, CardFooterText} from './styles';

import eventThumbnail from '../../assets/event_thumbnail.jpg';

const EventCards = () => {
  return (
    <Container>
      <CardImage source={eventThumbnail} />
      <CardTitle numberOfLines={1}>
        Mussum Ipsum teste do noboru
      </CardTitle>
      <CardDescription numberOfLines={4}>
        Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. In elementis mé pra quem é amistosis quis leo. Suco de cevadiss deixa as pessoas mais interessantis. 
      </CardDescription>
      <CardFooter>
        <CardFooterDate>
          <Icon name='today' size={12} color='#FFFFFF'/>
          <CardFooterText>
            12/03/2020
          </CardFooterText>
        </CardFooterDate>
        <CardFooterSchedule>
          <Icon name='schedule' size={12} color='#FFFFFF'/>
          <CardFooterText>
            12h00
          </CardFooterText>
        </CardFooterSchedule>
      </CardFooter>

    </Container>
  );
}

export default EventCards;