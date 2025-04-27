import { StoryObj } from '@storybook/react';
declare const meta: {
    component: {
        ({ children, ...props }: {
            children?: React.ReactNode;
        } & import('../../lib/types').BaseStylesProps & {
            children?: React.ReactNode;
            direction?: "row" | "column";
            align?: "end" | "start" | "center" | "stretch";
            justify?: "end" | "start" | "center" | "between" | "around";
            gap?: "0" | import('../../lib/types').Spacing;
        }): import("react/jsx-runtime").JSX.Element;
        Header: ({ children, ...props }: {
            children?: React.ReactNode;
        } & import('../../lib/types').BaseStylesProps & {
            children?: React.ReactNode;
            direction?: "row" | "column";
            align?: "end" | "start" | "center" | "stretch";
            justify?: "end" | "start" | "center" | "between" | "around";
            gap?: "0" | import('../../lib/types').Spacing;
        }) => import("react/jsx-runtime").JSX.Element;
        Footer: ({ children, ...props }: {
            children?: React.ReactNode;
        } & import('../../lib/types').BaseStylesProps & {
            children?: React.ReactNode;
            direction?: "row" | "column";
            align?: "end" | "start" | "center" | "stretch";
            justify?: "end" | "start" | "center" | "between" | "around";
            gap?: "0" | import('../../lib/types').Spacing;
        }) => import("react/jsx-runtime").JSX.Element;
        Image: (props: ({
            as?: import('../../../node_modules/react').ReactNode;
            children?: undefined;
        } | ({
            as?: undefined;
            children?: undefined;
        } & import('../../../node_modules/react').ClassAttributes<HTMLImageElement> & import('../../../node_modules/react').ImgHTMLAttributes<HTMLImageElement>) | ({
            as?: undefined;
            children?: import('../../../node_modules/react').ReactNode;
            containerProps?: import('../flex').FlexProps;
        } & import('../../../node_modules/react').ClassAttributes<HTMLImageElement> & import('../../../node_modules/react').ImgHTMLAttributes<HTMLImageElement>)) & import('../../lib/types').BaseStylesProps) => import("react/jsx-runtime").JSX.Element;
    };
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithDeleteButton: Story;
