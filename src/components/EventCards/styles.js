import styled from 'styled-components/native';

export const Container = styled.View`
  height: 210px;
  width: 160px;
  background-color: rgba(0,79,176,0.3);
  margin-right: 10px;
  margin-top: 5px;
  border-radius: 5px;
`;

export const CardImage = styled.Image`
  max-width: 160px;
  max-height: 90px;
  background-color: rgba(0,79,176,0.3);
  border-radius: 5px;
`;

export const CardTitle = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: left;
`;

export const CardDescription = styled.Text`
  flex: 1;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 12px;
  color: #FFFFFF;
  text-align: justify;
`;

export const CardFooter = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const CardFooterDate = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  align-content: flex-start;
`;

export const CardFooterSchedule = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  align-self: flex-end;
  align-content: flex-end;
`;

export const CardFooterText = styled.Text`
  margin-left: 2px;
  margin-right: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #FFFFFF;
`;