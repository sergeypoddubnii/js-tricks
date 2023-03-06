import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import NavigationLink from './index';

export default {
	title: 'Navigation Link',
	component: NavigationLink,
	decorators: [withRouter],
	argTypes: {
		text: {
			defaultValue: 'Menu item',
			description: 'String menu item',
		},
		to: {
			defaultValue: '/menu-item',
			description: 'String path to router',
		}
	}
} as ComponentMeta<typeof NavigationLink>;

const Template:ComponentStory<typeof NavigationLink> = (args) => <NavigationLink {...args} />;

export const Default = Template.bind({});
