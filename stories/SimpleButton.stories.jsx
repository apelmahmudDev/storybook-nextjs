import React from 'react';
import SimpleButton from './SimpleButton';

export default {
	title: 'Practice/SimpleButton',
	component: SimpleButton,
	argTypes: {
		backgroundColor: { control: 'color' },
		color: { control: 'color' },
	},
};

const Template = (args) => <SimpleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Default',
	size: 'medium',
	rounded: 'normal',
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary',
	size: 'medium',
	rounded: 'normal',
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Secondary',
	size: 'medium',
	variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
	label: 'Danger',
	size: 'medium',
	variant: 'danger',
};
