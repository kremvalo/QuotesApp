import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import theme from '../../themes';
import { ROUTES } from '../../utils';

import { QuoteCard } from '../../components';

import {
  MainWrapper,
  MainTitle,
  MainTitleDescription,
  MainSubtitle,
} from '../commonStyles';
import {
  WrapperCreateQuote,
  WrapperButtonCircle,
  ScrollViewRecentQuotes,
  ButtonCreateQuote,
} from './styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <MainWrapper>
      <MainTitle>List of quotes</MainTitle>
      <MainTitleDescription>
        You can see all quote information here
      </MainTitleDescription>
      <WrapperCreateQuote>
        <ButtonCreateQuote
          onPress={() => {
            navigation.navigate(ROUTES.CREATEQUOTE);
          }}>
          <WrapperButtonCircle>
            <Icon name="plus" size={15} color={theme.color.white} />
          </WrapperButtonCircle>
          <Text>Create</Text>
        </ButtonCreateQuote>
      </WrapperCreateQuote>
      <MainSubtitle>Recent Quotes</MainSubtitle>
      <ScrollViewRecentQuotes>
        <QuoteCard
          id="Quote #1"
          date="08.02.2021"
          name="Daniel Bolivar"
          price="10.00"
          key="Quote #1"
        />
      </ScrollViewRecentQuotes>
    </MainWrapper>
  );
};

export default HomeScreen;
