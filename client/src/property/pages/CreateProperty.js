import React from 'react';
import Input from '../../features/form/Input';
import Button from '../../features/form/Button';
import { useFetch } from '../../hooks/useFetch';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRED,
} from '../../features/form/validator';
import './createProperty.css';

//
const CreateProperty = () => {
	const [formState, inputHandler] = useFetch(
		{
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
			address: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	/* form submit handler */
	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={submitHandler}
			className='place-form'
		>
			<Input
				id='title'
				element='input'
				type='text'
				label='Title'
				validator={[VALIDATOR_REQUIRED()]}
				errorText='Please enter a valid title'
				onInput={inputHandler}
			/>
			<Input
				id='description'
				element='textarea'
				label='Description'
				validator={[VALIDATOR_MINLENGTH(5)]}
				errorText='Minimum of 5 characters is required'
				onInput={inputHandler}
			/>
			<Input
				id='address'
				element='input'
				label='Address'
				validator={[VALIDATOR_REQUIRED()]}
				errorText='Please enter a valid address'
				onInput={inputHandler}
			/>
			<div className='btn-center'>
				<Button
					type='submit'
					disabled={!formState.isValid}
				>
					Add Property
				</Button>
			</div>
		</form>
	);
};

export default CreateProperty;
