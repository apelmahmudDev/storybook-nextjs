import React from 'react';
import IconButton from './IconButton';

export default {
	title: 'Practice/IconButton',
	component: IconButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = (args) => <IconButton {...args} />;

export const LoveIconButton = Template.bind({});
LoveIconButton.args = {
	icon: '❤',
	label: 'Love Icon Button',
};

export const HappyIconButton = Template.bind({});
HappyIconButton.args = {
	icon: '😊',
	label: 'Happy Icon Button',
};
