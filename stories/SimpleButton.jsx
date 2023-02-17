import React from 'react';
import PropTypes from 'prop-types';
import './SimpleButton.css';

export const SimpleButton = ({
	label,
	color,
	backgroundColor,
	size,
	rounded,
	variant,
	...props
}) => {
	return (
		<button
			type='button'
			className={`simple-button simple-button--${size} simple-button-rounded--${rounded} simple-button--${variant}`}
			style={{ backgroundColor, color }}
			{...props}
		>
			{label}
		</button>
	);
};

SimpleButton.propTypes = {
	label: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	rounded: PropTypes.oneOf(['sm', 'normal', 'full']),
	onClick: PropTypes.func,
};

SimpleButton.defaultProps = {
	label: 'button',
	backgroundColor: null,
	color: null,
	size: 'medium',
	variant: 'default',
	rounded: 'medium',
	onClick: undefined,
};

export default SimpleButton;
