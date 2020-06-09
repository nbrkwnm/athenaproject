import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, CardHeader, CardContent, TitleHeader, SubtitleHeader, EventTitle, EventDate, EventLocal, EventDescription} from './styles';

import eventThumbnail from '../../assets/event_thumbnail.jpg';

const EventCards = () => {
    return (
        <Container>
            <CardHeader>
                <Image source={eventThumbnail} style={{
                    height: 50, 
                    width: 50, 
                    borderRadius: 13,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3
                }} />
                <TitleHeader>
                    <EventTitle>
                        Final do Campeonato Brasileiro do CBLOL
                    </EventTitle>
                    <SubtitleHeader>
                        <Icon name="event" size={12}/>
                        <EventDate>
                            16/05
                        </EventDate>
                    </SubtitleHeader>
                    <SubtitleHeader>
                        <Icon name='location-on' size={12}/>
                        <EventLocal>
                            Cuiabá
                        </EventLocal>
                    </SubtitleHeader>  
                </TitleHeader>
            </CardHeader>
            <CardContent>
                Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. In elementis mé pra quem é amistosis quis leo. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Sapien in monti palavris qui num significa nadis i pareci latim.
            </CardContent>
        </Container>
    );
}

export default EventCards;