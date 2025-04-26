import { createContext, useContext, useMemo } from 'react';

type SwitchContextType<T extends string> = {
  value: T | null;
  onChange: (value: T) => void;
};

const SwitchContext = createContext<SwitchContextType<string>>({
  value: null,
  onChange: () => {},
});

type Props<T extends string> = {
  value?: T | null;
  onChange?: (value: T) => void;
  children: React.ReactNode;
};

export const SwitchProvider = <T extends string>(props: Props<T>) => {
  const { value, onChange, children } = props;

  const contextValue = useMemo(
    () => ({ value, onChange }) as SwitchContextType<string>,
    [value, onChange],
  );

  return <SwitchContext.Provider value={contextValue}>{children}</SwitchContext.Provider>;
};

export const useSwitchContext = <T extends string>() => {
  const context = useContext(SwitchContext) as unknown as SwitchContextType<T>;

  if (!context) {
    throw new Error('useSwitch must be used within a SwitchProvider');
  }

  return context;
};
