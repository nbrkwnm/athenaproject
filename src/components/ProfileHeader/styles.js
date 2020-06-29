import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: #0073FF;  
  height: 150px;
  width: 100%;
`;

export const ProfilePicture = styled.Image`
  border-radius: 85px;
  background-color: #FFFFFF;
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ProfileInfo = styled.View`
  margin-top: 25px;
  margin-right: 20px;
  flex: 1;
`;

export const ProfileName = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileUser = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
`;