import React from 'react';

import { ClientInfo, ProductCard } from '../../components';

import {
  MainWrapper,
  MainSubtitle,
  MainTitleDescription,
} from '../commonStyles';
import { ScrollViewProducts, WrapperTotal, TotalPrice } from './styles';
import CustomButton from '../../components/customButton';

const CreateQuoteScreen: React.FC = () => {
  return (
    <MainWrapper>
      <ClientInfo
        name={'pepe'}
        lastname={'fernandez'}
        date={'2023-23-2'}
        address={'Cr 24 # 3a-20'}
      />
      <MainSubtitle>Choose Products</MainSubtitle>
      <ScrollViewProducts>
        <ProductCard
          id={'Brav-10'}
          name={'Product #1'}
          price={6.0}
          isChecked
          onChangeChecked={() => { }}
          onChangeQuantity={() => { }}
        />
        <ProductCard
          id={'Brav-10'}
          name={'Product #1'}
          price={6.0}
          isChecked
          onChangeChecked={() => { }}
          onChangeQuantity={() => { }}
        />
        <ProductCard
          id={'Brav-10'}
          name={'Product #1'}
          price={6.0}
          isChecked
          onChangeChecked={() => { }}
          onChangeQuantity={() => { }}
        />
        <ProductCard
          id={'Brav-10'}
          name={'Product #1'}
          price={6.0}
          isChecked
          onChangeChecked={() => { }}
          onChangeQuantity={() => { }}
        />
      </ScrollViewProducts>
      <WrapperTotal>
        <MainTitleDescription>Total</MainTitleDescription>
        <TotalPrice>18.00 USD</TotalPrice>
      </WrapperTotal>
      <CustomButton title={'Quote'} onPress={() => { }} />
    </MainWrapper>
  );
};

export default CreateQuoteScreen;
