import reactNative from '@react-native/eslint-config/flat';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/',
      '.yarn/',
      'lib/',
      'coverage/',
      'example/.expo/',
      'example/dist/',
      'example/android/',
      'example/ios/',
    ],
  },
  ...reactNative,
  prettierRecommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
