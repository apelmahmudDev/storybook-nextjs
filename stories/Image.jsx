import React from 'react';
import './image.css';
import PropTypes from 'prop-types';

const Image = ({ src, alt, objectFit, ...props }) => {
	return <img className={`storybook-image`} src={src} alt={alt} {...props} />;
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
};

Image.defaultProps = {
	src: 'https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
};

export default Image;
