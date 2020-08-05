import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  background-color: #FFFFFF;  
  align-items: center;
  align-content: center;
  height: 150px;
  width: 100%;
`;

export const ProfilePicture = styled.View`
  border-radius: 85px;
  background-color: rgba(30,30,30,0.25);
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

export const ProfileInfo = styled.View`
  margin-top: 20px;
  margin-right: 5px;
  flex: 1;
`;

export const ProfileName = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileUser = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
`;