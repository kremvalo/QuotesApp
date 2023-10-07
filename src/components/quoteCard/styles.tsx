import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const WrapperButtonCircle = styled.View`
  background-color: ${({ theme: { color } }) => color.middleGrey};
  border-radius: 30px;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

const WrapperInfo = styled.View`
  padding: 4px 20px 4px 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 70%;
`;

const WrapperPrice = styled.View`
  justify-content: center;
  align-items: center;
`;

const QuoteId = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  font-size: 12px;
  padding-bottom: 5px;
`;

const QuoteDate = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.grey};
  font-size: 12px;
`;

const QuoteName = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  font-size: 12px;
`;

const QuotePrice = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.menta};
  font-size: 20px;
`;

export {
  Wrapper,
  WrapperButtonCircle,
  WrapperInfo,
  WrapperPrice,
  QuoteId,
  QuoteDate,
  QuoteName,
  QuotePrice,
};
