import React from 'react';
import { type GestureResponderEvent } from 'react-native';

import { WrapperTouchable, Title } from './styles';

interface IProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<IProps> = ({ title, onPress }) => {
  return (
    <WrapperTouchable onPress={onPress}>
      <Title>{title}</Title>
    </WrapperTouchable>
  );
};

export default CustomButton;
