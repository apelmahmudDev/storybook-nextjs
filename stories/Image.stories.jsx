import React from 'react';
import Image from './Image';

export default {
	title: 'Practice/Image',
	component: Image,
};

const Template = (args) => <Image {...args} />;

export const ImageDiscover = Template.bind({});
ImageDiscover.args = {
	// src: '',
	objectFit: 'contain',
};
