import styled from 'styled-components/native';

const Wrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.lightGrey};
  flex: 1;
  padding: 20px 10px;
`;

const WrapperCreateQuote = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  height: 15%;
`;

const WrapperButtonCircle = styled.View`
  background-color: ${({ theme: { color } }) => color.blueLight};
  border-radius: 20px;
  height: 30px;
  width: 35px;
  justify-content: center;
  justify-content: center;
  align-items: center;
`;

const ScrollViewRecentQuotes = styled.ScrollView`
  height: 70%;
  flex-grow: 1;
`;

const ButtonCreateQuote = styled.TouchableOpacity`
  background-color: ${({ theme: { color } }) => color.lightGrey};
  height: 100%;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  font-size: 22px;
`;

const TitleDescription = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.grey};
  font-size: 12px;
`;

const Subtitle = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  font-size: 16px;
`;

export {
  Wrapper,
  WrapperCreateQuote,
  WrapperButtonCircle,
  ScrollViewRecentQuotes,
  ButtonCreateQuote,
  Title,
  TitleDescription,
  Subtitle,
};
