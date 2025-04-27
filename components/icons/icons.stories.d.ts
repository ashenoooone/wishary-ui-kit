import { StoryObj } from '@storybook/react';
import { IconProps } from './config';
declare const meta: {
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
interface IconStoryProps extends IconProps {
    className?: string;
}
type IconStory = StoryObj<{
    args: IconStoryProps;
}>;
export declare const Search: IconStory;
export declare const Settings: IconStory;
export declare const Trash: IconStory;
export declare const CloseFill: IconStory;
export declare const QuestionLine: IconStory;
export declare const BlingFill: IconStory;
export declare const Share: IconStory;
export declare const Chevron: IconStory;
export declare const Plus: IconStory;
export declare const Arrow: IconStory;
