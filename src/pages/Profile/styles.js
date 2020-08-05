import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF
`;

export const ProfileScroll = styled.ScrollView`
  background-color: #FFFFFF;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #404040;
  font-size: 18px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #6B6B6B;
  font-size: 14px;
  font-weight: bold;
`;

export const Line = styled.View`
  margin-top: 5px;
  border-bottom-color: rgba(64,64,64,0.10);
  border-bottom-width: 1px;
`;

export const LogoutButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
`;