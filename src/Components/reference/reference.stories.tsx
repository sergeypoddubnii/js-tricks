import React from 'react';
import Reference from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'InfoLink',
	component: Reference,
} as ComponentMeta<typeof Reference>;

const Template: ComponentStory<typeof Reference> = (arg) => <Reference {...arg}/>;

export const Link = () => Template.bind({});

