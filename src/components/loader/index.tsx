import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Wrapper } from './styles';

const Loader: React.FC = () => {
  return (
    <Wrapper>
      <ActivityIndicator size="large" />
    </Wrapper>
  );
};

export default Loader;
