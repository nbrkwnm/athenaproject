import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 30px 10px;
  flex: 1;
  background-color: #FFFFFF;
`;

export const GroupEventScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  decelerationRate: 0.75,
})`
  
`;

export const EventFeedBar = styled.View`
  background-color: rgba(0, 115, 255, 0);
  margin-bottom: 20px;
`;

export const EventGroupTitle = styled.Text`
  color: #0073FF;
  font-size: 28px;
  font-weight: bold;
`;
