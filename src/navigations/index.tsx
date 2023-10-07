import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';

import theme from '../themes';

import CreateQuoteStack from './CreateQuoteStack';
import { ROUTES } from '../utils';

import HomeScreen from '../features/home';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

function AppNavigator(): React.JSX.Element {
  const BackButton = ({ onPress }) => (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Icon name="chevron-left" size={25} color={theme.color.black} />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.color.lightGrey,
        },
        headerTintColor: theme.color.black,
        headerTitleAlign: 'center',
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: theme.color.white,
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarShowLabel: false, 
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="house" color={color} size={size} />
          ),
          title: 'Quotes',
          headerLeft: () => (
            <Icon name="bars" size={25} color={theme.color.black} />
          ),
          headerRight: () => (
            <Icon name="circle-user" size={35} color={theme.color.grey} solid />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CREATEQUOTE}
        component={CreateQuoteStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="arrow-right-arrow-left" color={color} size={size} />
          ),
          title: 'Create quote',
          headerLeft: () => <BackButton onPress={() => { }} />,
          headerRight: () => (
            <Icon name="bell" size={20} color={theme.color.black} thin />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CreateQuoteStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CreateQuoteStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="circle-user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
