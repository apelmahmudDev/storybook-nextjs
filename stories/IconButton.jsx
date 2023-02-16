import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ icon, label, backgroundColor, ...props }) => {
	return (
		<button>
			<span>{icon}</span>
			<span>{label}</span>
		</button>
	);
};

IconButton.propTypes = {
	icon: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
};

IconButton.defaultProps = {
	backgroundColor: null,
};

export default IconButton;
