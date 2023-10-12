import styled from 'styled-components/native';

const ButtonCreateQuote = styled.TouchableOpacity`
  background-color: ${({ theme: { color } }) => color.lightGrey};
  height: 100%;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
`;

const WrapperTotal = styled.View`
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TotalPrice = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.menta};
  font-size: 20px;
`;

const ScrollViewProducts = styled.ScrollView`
  flex-grow: 1;
  height: 250px;
`;

export { ButtonCreateQuote, ScrollViewProducts, WrapperTotal, TotalPrice };
