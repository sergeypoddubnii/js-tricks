import React from 'react';
import Card from './index';
import '../../../assets/base.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const meta = {
	title: 'Card',
	component: Card,
	argTypes: {
		children: {
			defaultValue: 'Card body...',
		}
	}
} as ComponentMeta<typeof  Card>;

export default meta;

const Template: ComponentStory<typeof Card> = (arg) => <Card {...arg} />;

export const Primary = Template.bind({});

Primary.args = {
	title: 'Primary card title',
};
