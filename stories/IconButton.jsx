import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ icon, bgColor, rounded, size, ...props }) => {
	const mode = rounded ? 'rounded' : 'no-rounded';
	return (
		<button
			className={['icon-button', `icon-button--${size}`, mode].join(' ')}
			style={bgColor && { backgroundColor: bgColor }}
		>
			{icon}
		</button>
	);
};

IconButton.propTypes = {
	icon: PropTypes.string.isRequired,
	rounded: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	bgColor: PropTypes.string,
};

IconButton.defaultProps = {
	icon: '🌺',
	rounded: true,
	size: 'medium',
};

export default IconButton;
