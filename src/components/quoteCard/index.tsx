import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { View } from 'react-native';

import theme from '../../themes';

import {
  Wrapper,
  WrapperButtonCircle,
  WrapperInfo,
  WrapperPrice,
  QuoteId,
  QuoteDate,
  QuoteName,
  QuotePrice,
} from './styles';

interface IProps {
  id: string;
  date: string;
  name: string;
  price: string;
}

const QuoteCard: React.FC<IProps> = ({ id, date, name, price }) => {
  return (
    <Wrapper>
      <WrapperButtonCircle>
        <Icon name="dollar-sign" size={20} color={theme.color.grey} />
      </WrapperButtonCircle>
      <WrapperInfo>
        <View>
          <QuoteId>{id}</QuoteId>
          <QuoteDate>{date}</QuoteDate>
        </View>
        <QuoteName>{name}</QuoteName>
      </WrapperInfo>
      <WrapperPrice>
        <QuotePrice>${price}</QuotePrice>
      </WrapperPrice>
    </Wrapper>
  );
};

export default QuoteCard;
