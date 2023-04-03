import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

//
const Button = (props) => {
	// show anchor link for 'href' props
	if (props.href) {
		return (
			<a
				className={`button button--${
					props.size || 'default'
				} ${props.inverse && 'button--inverse'} ${
					props.danger && 'button--danger'
				}`}
				href={props.href}
			>
				{props.children}
			</a>
		);
	}

	// show Link for 'to' props
	if (props.to) {
		return (
			<Link
				to={props.to}
				exact={props.exact}
				className={`button button--${
					props.size || 'default'
				} ${props.inverse && 'button--inverse'} ${
					props.danger && 'button--danger'
				}`}
			>
				{props.children}
			</Link>
		);
	}

	// show regular btn if none of the above props
	return (
		<button
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}
			className={`button button--${
				props.size || 'default'
			} ${props.inverse && 'button--inverse'} ${
				props.danger && 'button--danger'
			}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
