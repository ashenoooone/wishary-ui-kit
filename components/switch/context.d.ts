type SwitchContextType<T extends string> = {
    value: T | null;
    onChange: (value: T) => void;
};
type Props<T extends string> = {
    value?: T | null;
    onChange?: (value: T) => void;
    children: React.ReactNode;
};
export declare const SwitchProvider: <T extends string>(props: Props<T>) => import("react/jsx-runtime").JSX.Element;
export declare const useSwitchContext: <T extends string>() => SwitchContextType<T>;
export {};
