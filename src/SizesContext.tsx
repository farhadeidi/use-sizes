import React, { createContext, useState } from 'react';

export type SizeProps = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLandscapeMode: boolean;
  isPortraitMode: boolean;
  aspectRatio: number[];
  is?: {
    xs: boolean;
    s: boolean;
    m: boolean;
    l: boolean;
    xl: boolean;
    xxl: boolean;
  };
};

export interface Props {
  state: {};
  setState: (state: {}) => void;
}

const SizesContext = createContext<Props | undefined>(undefined);
const SizesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({});

  return (
    <SizesContext.Provider
      value={
        {
          state,
          setState,
        } as Props
      }
    >
      {children}
    </SizesContext.Provider>
  );
};

export { SizesProvider, SizesContext };
