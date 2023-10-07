import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigations';

import { ThemeProvider } from 'styled-components/native';

import theme from './src/themes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
