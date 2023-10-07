import styled from 'styled-components/native';

const MainWrapper = styled.ScrollView`
  background-color: ${({ theme: { color } }) => color.lightGrey};
  flex: 1;
  padding: 20px 10px;
`;
const MainTitle = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  font-size: 22px;
`;

const MainTitleDescription = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.grey};
  font-size: 12px;
`;

const MainSubtitle = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  font-size: 16px;
`;

export { MainWrapper, MainTitle, MainTitleDescription, MainSubtitle };
