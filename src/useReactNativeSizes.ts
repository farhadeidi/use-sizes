import { useContext } from 'react';
import { SizesContext } from './SizesContext';
import type { SizeProps } from './getSizes';

export default function useReactNativeSizes(): SizeProps {
  const sizes = useContext(SizesContext);

  if (sizes === undefined) {
    throw new Error(
      'useReactNativeSizes must be used within a <SizesProvider>'
    );
  }

  return sizes;
}
