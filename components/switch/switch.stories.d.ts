import { StoryObj } from '@storybook/react';
declare const meta: {
    component: {
        <T extends string>(props: {
            title?: import('../../../node_modules/react').ReactNode;
            helpText?: import('../../../node_modules/react').ReactNode;
            value?: T | undefined;
            onChange?: ((value: T) => void) | undefined;
            children?: import('../../../node_modules/react').ReactNode;
        } & import('../../lib/types').BaseStylesProps): import("react/jsx-runtime").JSX.Element;
        Button: <T extends string>(props: {
            value?: T | undefined;
            asChild?: boolean;
        } & import('../../lib/types').BaseStylesProps & import('../../../node_modules/react').ClassAttributes<HTMLButtonElement> & import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
    };
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
