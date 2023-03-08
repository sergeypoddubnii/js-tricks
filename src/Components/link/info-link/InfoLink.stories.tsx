import React from 'react';
import InfoLink from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'InfoLink',
	component: InfoLink,
} as ComponentMeta<typeof InfoLink>;

const Template: ComponentStory<typeof InfoLink> = (arg) => <InfoLink {...arg}/>;

export const Link = () => Template.bind({});

