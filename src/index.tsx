import React from 'react';
import { Text, View, ViewProps } from 'react-native';

interface SayMyNameProps extends ViewProps {
  name?: string;
}
const SayMyName: React.FC<SayMyNameProps> = ({ name, ...props }) => {
  return (
    <View {...props}>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default SayMyName;
