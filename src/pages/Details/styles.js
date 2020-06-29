import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #FFFFFF;
`;

export const EventHeader = styled.View`
  flex-direction: row;
  background-color: #0073FF;  
  height: 60px;
  width: 100%;
`;

export const EventTitle = styled.Text`
  font-weight: bold;
  font-size: 32px;
  margin-left: 10px;
`;

export const DescriptionContent = styled.ScrollView`
  margin: 10px;
`;

