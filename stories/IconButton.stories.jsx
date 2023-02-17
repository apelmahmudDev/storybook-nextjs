import React from 'react';
import IconButton from './IconButton';

export default {
	title: 'Practice/IconButton',
	component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Small = Template.bind({});
Small.args = {
	icon: '🌺',
	bgColor: 'olive',
	size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
	icon: '🌺',
	bgColor: 'olive',
	size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
	icon: '🌺',
	bgColor: 'olive',
	size: 'large',
};
