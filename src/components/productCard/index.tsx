import React from 'react';
import {
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import theme from '../../themes';

import {
  Wrapper,
  WrapperButtonCircle,
  WrapperInfo,
  WrapperPriceQuantity,
  ProductId,
  ProductName,
  ProductPrice,
  QuantityText,
  QuantityInput,
} from './styles';

interface IProps {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  isChecked: boolean;
  onChangeChecked: (checked: boolean) => void;
  onChangeQuantity: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const ProductCard: React.FC<IProps> = ({
  id,
  name,
  price,
  isChecked,
  onChangeChecked,
  onChangeQuantity,
}) => {
  return (
    <Wrapper>
      <BouncyCheckbox
        size={25}
        fillColor={theme.color.menta}
        innerIconStyle={{ borderWidth: 1 }}
        isChecked={isChecked}
        onPress={onChangeChecked}
      />
      <WrapperButtonCircle />
      <WrapperInfo>
        <ProductName>{name}</ProductName>
        <ProductId>code: {id}</ProductId>
      </WrapperInfo>
      <WrapperPriceQuantity>
        <QuantityInput
          keyboardType="numeric"
          maxLength={1}
          onChange={onChangeQuantity}
        />
        <QuantityText>Quantity</QuantityText>
      </WrapperPriceQuantity>
      <WrapperPriceQuantity>
        <ProductPrice>${price}</ProductPrice>
      </WrapperPriceQuantity>
    </Wrapper>
  );
};

export default ProductCard;
