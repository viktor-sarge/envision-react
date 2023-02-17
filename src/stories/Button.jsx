import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	variant,
	size,
	label,
	block,
	classes,
	disabled,
	...props
}) => {
	let classNames = variant ? `env-button ${variant}` : 'env-button';
	classNames = size ? classNames + ` ${size}` : classNames;
	classNames = block ? classNames + ` env-button--block` : classNames;
	return (
		<button
			type="button"
			className={classNames}
			{...props}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	disabled: PropTypes.bool,
	block: PropTypes.bool,
	variant: PropTypes.oneOf([
		'',
		'env-button--brand',
		'env-button--primary',
		'env-button--secondary',
		'env-button--success',
		'env-button--warning',
		'env-button--danger',
		'env-button--info',
		'env-button--ghost',
		'env-button--link',
	]),
	size: PropTypes.oneOf([
		'',
		'env-button--slim',
		'env-button--small',
		'env-button--large',
	]),

	/**
	 * Is this the principal call to action on the page?
	 */
	// primary: PropTypes.bool,
	/**
	 * What background color to use
	 */
	// backgroundColor: PropTypes.string,
	/**
	 * How large should the button be?
	 */
	// size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Button contents
	 */
	// label: PropTypes.string.isRequired,
	// /**
	//  * Optional click handler
	//  */
	// onClick: PropTypes.func,
};

Button.defaultProps = {
	variant: false,
};
