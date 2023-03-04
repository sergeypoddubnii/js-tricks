import React from 'react';
import Card from './index';
import '../../assets/base.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'UI/Card',
	component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (arg) => <Card {...arg} />;

export const Primary = Template.bind({});

Primary.args = {
	title: 'Primary card title',
	children: 'String type to title body',
};
