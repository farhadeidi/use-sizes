import { createContext, useMemo, type ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';
import { getSizes, type SizeProps } from './getSizes';

export const SizesContext = createContext<SizeProps | undefined>(undefined);

export function SizesProvider({ children }: { children: ReactNode }) {
  const { width, height, scale, fontScale } = useWindowDimensions();

  const sizes = useMemo(
    () => getSizes({ width, height, scale, fontScale }),
    [width, height, scale, fontScale]
  );

  return (
    <SizesContext.Provider value={sizes}>{children}</SizesContext.Provider>
  );
}
