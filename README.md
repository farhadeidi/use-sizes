# use-sizes

A simple and minimal device size checker hook for React Native and Expo (iOS, Android and Web).

- Built on `useWindowDimensions`, so it updates on rotation, split-screen and browser resize.
- Sizes are computed once per dimension change and shared through context, so every consumer gets the same object.
- Works with React 19, React Native 0.8x and Expo SDK 57. Ships as ESM with TypeScript definitions.

## Installation

```sh
npm install use-sizes
```

or

```sh
yarn add use-sizes
```

## Usage

1. Wrap your app entry point in `SizesProvider`

```tsx
import { SizesProvider } from 'use-sizes';

export default function App() {
  return (
    <SizesProvider>
      <AppContainer />
    </SizesProvider>
  );
}
```

2. Use the hook anywhere below the provider

```tsx
import { Text, View } from 'react-native';
import { useReactNativeSizes } from 'use-sizes';

function AppContainer() {
  const sizes = useReactNativeSizes();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{JSON.stringify(sizes, null, 2)}</Text>
    </View>
  );
}
```

## Result

```ts
const sizes = {
  width: 540, // number
  height: 960, // number
  scale: 3, // number
  fontScale: 1, // number
  aspectRatio: [9, 16], // [number, number]
  isPhone: true, // boolean [width <= 680]
  isTablet: false, // boolean [width > 680]
  isDesktop: false, // boolean [width > 1024]
  isPortraitMode: true, // boolean [width < height]
  isLandscapeMode: false, // boolean [height < width]
  is: {
    xs: false, // boolean [width <= 320]
    s: false, // boolean [width <= 480]
    m: true, // boolean [width > 480]
    l: false, // boolean [width >= 768]
    xl: false, // boolean [width >= 1024]
    xxl: false, // boolean [width >= 1280]
  },
};
```

## Helpers

The pure functions behind the hook are exported as well, so you can use them outside of React:

```ts
import { Dimensions } from 'react-native';
import { getSizes, getAspectRatio, getGreatestCommonDivisor } from 'use-sizes';

const sizes = getSizes(Dimensions.get('window'));
getAspectRatio(1920, 1080); // [16, 9]
getGreatestCommonDivisor(1920, 1080); // 120
```

Types `SizeProps` and `SizeInput` are exported too.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
