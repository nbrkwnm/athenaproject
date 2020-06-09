import styled from 'styled-components/native';

export const Container = styled.View`
    height: 200px;
    background-color: rgba(170,170,170,0.1);
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    border-radius: 5px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    margin-left: 3px;
    margin-top: 3px;
    margin-right: 3px;
`;

export const CardContent = styled.Text`
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 12px;
    text-align: justify;
`;

export const TitleHeader = styled.View`
    max-height: 50px;
`;

export const SubtitleHeader = styled.View`
    flex-direction: row;
    max-height: 50px;
    margin-left: 3px;
    align-items: center;
`;

export const EventTitle = styled.Text`
    margin-left: 3px;
    text-align: left;
    font-weight: bold;
    font-size: 16px;
`;

export const EventDescription = styled.Text`
    
`;

export const EventHoster = styled.Text`
    flex: 1;
    margin-left: 3px;
    text-align: left;
    font-size: 12px;
`;

export const EventDate = styled.Text`
    margin-left: 3px;
    text-align: left;
    font-size: 12px;
`;

export const EventLocal = styled.Text`
    margin-left: 3px;
    text-align: left;
    font-size: 12px;
`;