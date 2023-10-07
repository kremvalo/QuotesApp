import styled from 'styled-components/native';

const ButtonCreateQuote = styled.TouchableOpacity`
  background-color: ${({ theme: { color } }) => color.lightGrey};
  height: 100%;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
`;

const TitleDescription = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.grey};
  font-size: 12px;
`;

export { ButtonCreateQuote, TitleDescription };
