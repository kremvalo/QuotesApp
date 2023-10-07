import styled from 'styled-components/native';

const Wrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
  margin-vertical: 10px;
`;

const WrapperRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WrapperMainInformationRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-width: 0px 0px 1px 0px;
  padding-bottom: 10px;
  border-color: ${({ theme: { color } }) => color.lightGrey};
`;

const CustomText = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.grey};
  font-size: 12px;
  padding-vertical: 7px;
`;

export { Wrapper, WrapperRow, WrapperMainInformationRow, CustomText };
