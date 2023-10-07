import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';

import theme from '../../themes';

import CreateQuoteStack from './CreateQuoteStack';
import { ROUTES } from '../../utils';

import HomeScreen from '../../features/home';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function AppNavigator(): React.JSX.Element {
  const navigation = useNavigation();
  const blackColor = theme.color.black;

  const BackButton = ({ onPress }) => (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <Icon name="chevron-left" size={25} color={blackColor} />
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
          tabBarIcon: ({ color }) => (
            <Icon name="house" color={color} size={20} />
          ),
          title: 'Quotes',
          headerLeft: () => <Icon name="bars" size={25} color={blackColor} />,
          headerRight: () => (
            <Icon name="circle-user" size={35} color={theme.color.grey} solid />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CREATEQUOTE}
        component={CreateQuoteStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="arrow-right-arrow-left" color={color} size={20} />
          ),
          title: 'Create quote',
          headerLeft: () => (
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerRight: () => (
            <Icon name="bell" size={20} color={blackColor} thin />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CreateQuoteStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="credit-card" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CreateQuoteStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="circle-user" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
