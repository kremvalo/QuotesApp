import React, { useEffect } from 'react';

import {
  ClientInfo,
  ProductCard,
  CustomButton,
  Loader,
} from '../../components';

import {
  MainWrapper,
  MainSubtitle,
  MainTitleDescription,
} from '../commonStyles';
import { ScrollViewProducts, WrapperTotal, TotalPrice } from './styles';
import { getProductsAsync } from './slice';
import { AppDispatch } from '../../core/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../core/types';

const CreateQuoteScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, productList } = useSelector(
    (state: any) => state.createQuote,
  );
  console.log('state', productList);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <MainWrapper>
      <ClientInfo
        name={'Pepe'}
        lastname={'Fernandez'}
        date={'2023-23-2'}
        address={'Cr 24 # 3a-20'}
      />
      <MainSubtitle>Choose Products</MainSubtitle>
      <ScrollViewProducts>
        {productList != null ? (
          productList.map(product => (
            <ProductCard
              id={product.product_id}
              name={product.product_name}
              price={product.product_price}
              isChecked
              onChangeChecked={() => { }}
              onChangeQuantity={() => { }}
            />
          ))
        ) : (
          <MainSubtitle>Without Products</MainSubtitle>
        )}
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
