import styled from 'styled-components/native';

const WrapperTouchable = styled.TouchableOpacity`
  background-color: ${({ theme: { color } }) => color.blueLight};
  flex: 1;
  padding: 10px;
  margin: 20px 10px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: ${({ theme: { color } }) => color.white};
  font-size: 20px;
  font-weight: bold;
`;

export { WrapperTouchable, Title };
