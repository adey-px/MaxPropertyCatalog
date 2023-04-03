import React, { useReducer, useEffect } from 'react';
import { validate } from './validator';
import './Input.css';

// Reducer for Input below
const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validator),
			};
		case 'TOUCH': {
			return {
				...state,
				isTouched: true,
			};
		}
		default:
			return state;
	}
};

//
const Input = (props) => {
	/* default states of input */
	const [inputState, dispatch] = useReducer(inputReducer, {
		isTouched: false,
		isValid: props.initValidity || false,
		value: props.initialValue || '',
	});

	const { id, onInput } = props;
	const { value, isValid } = inputState;

	/* side effect */
	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	/* input change handler */
	const changeHandler = (e) => {
		dispatch({
			type: 'CHANGE',
			val: e.target.value,
			validator: props.validator,
		});
	};

	/* input touch handler */
	const touchHandler = () => {
		dispatch({
			type: 'TOUCH',
		});
	};

	/* define input selector */
	const element =
		props.element === 'input' ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
			/>
		);

	return (
		/* input div with dynamic styling */
		<div
			className={`form-control ${
				inputState.isTouched &&
				!inputState.isValid &&
				'form-control--invalid'
			}`}
		>
			{/* input label */}
			<label htmlFor={props.id}>{props.label}</label>

			{/* input selector */}
			{element}

			{/* conditions for error text */}
			{inputState.isTouched && !inputState.isValid && (
				<p>{props.errorText}</p>
			)}
		</div>
	);
};

export default Input;