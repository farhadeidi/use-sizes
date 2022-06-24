import React from 'react';
import { Text, View } from 'react-native';
import { useReactNativeSizes, SizesProvider } from 'use-sizes';

const AppContainer = () => {
  const sizes = useReactNativeSizes();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{JSON.stringify(sizes, null, 2)}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SizesProvider>
      <AppContainer />
    </SizesProvider>
  );
};

export default App;
