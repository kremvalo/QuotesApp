import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: 10px;
  flex-direction: row;
  width: 100%;
  align-items: center;
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
  width: 38%;
`;

const WrapperPriceQuantity = styled.View`
  align-items: center;
  padding: 10px;
`;

const ProductId = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.grey};
  font-size: 10px;
  padding-bottom: 5px;
`;

const ProductName = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  font-size: 12px;
`;

const ProductPrice = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.menta};
  font-size: 20px;
`;

const QuantityText = styled.Text`
  font-weight: bold;
  color: ${({ theme: { color } }) => color.black};
  opacity: 0.5;
  font-size: 10px;
`;

const QuantityInput = styled.TextInput`
  textalign: center;
  padding: 2px 5px;
  border-radius: 5px;
  height: 20px;
  width: 30px;
  font-size: 10px;
  border-width: 1px;
  border-color: ${({ theme: { color } }) => color.blueLight};
  background-color: ${({ theme: { color } }) => color.blueSuperLight};
`;

export {
  Wrapper,
  WrapperButtonCircle,
  WrapperInfo,
  WrapperPriceQuantity,
  ProductId,
  ProductName,
  ProductPrice,
  QuantityText,
  QuantityInput,
};
