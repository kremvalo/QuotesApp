import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';

import CreateQuoteScreen from '../features/createQuote';

import { ROUTES } from '../utils';
import theme from '../themes';

const Stack = createNativeStackNavigator();

function CreateQuoteStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.CREATEQUOTE}
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.color.lightGrey,
        },
        headerTintColor: theme.color.black,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={ROUTES.CREATEQUOTE}
        component={CreateQuoteScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default CreateQuoteStack;
