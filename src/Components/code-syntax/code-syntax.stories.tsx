import React from 'react';
import CodeSyntax from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
	title: 'Code Syntax',
	component: CodeSyntax,
	argTypes: {
		code: {
			defaultValue: '{\n\tactionType: "",\n    data: {\n        title: "Understanding Flux step by step",\n        author: "Sharvin"\n    }\n}',
			description: 'Sting of code',
		}
	}
} as ComponentMeta<typeof  CodeSyntax>;

const Template:ComponentStory<typeof CodeSyntax> = (args) => <CodeSyntax {...args} />;

export const DefaultWithTitle = Template.bind({});
export const DefaultTitleEmpty = Template.bind({});

DefaultWithTitle.args = {
	title: 'Code Title',
};
