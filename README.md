# use-sizes

A simple and minimal device size checker hook for react-native

## Installation

```sh
yarn add use-sizes
```

or

```sh
npm install use-sizes
```

## Usage with React-Native

1. Wrap your app entry point in SizesProvider

```tsx
import { SizesProvider } from 'use-sizes';

const App = () => {
  return (
    <SizesProvider>
      <AppContainer />
    </SizesProvider>
  );
};

export default App;
```

2. Use hook to access sizes

```tsx
import { useReactNativeSizes } from 'use-sizes';

const AppContainer = () => {
  const sizes = useReactNativeSizes();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{JSON.stringify(sizes, null, 2)}</Text>
    </View>
  );
};
```

## Result

```tsx
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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
