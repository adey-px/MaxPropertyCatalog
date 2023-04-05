import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../features/form/Input';
import Button from '../../features/form/Button';
import { useFetch } from '../../hooks/useFetch';
import {
	VALIDATOR_REQUIRED,
	VALIDATOR_MINLENGTH,
} from '../../features/form/validator';
import PROPERTIES from '../../datasource/property';
import './createProperty.css';

//
const UpdateProperty = () => {
	// Get place id - pid from url in App route
	const placeId = useParams().pid;

	// Retrieve place from db
	const property = PROPERTIES.find(
		(place) => place.id === placeId
	);

	// Call useFetch hook from hooks
	const [formState, inputHandler] = useFetch(
		{
			title: {
				value: property.title,
				isValid: true,
			},
			description: {
				value: property.description,
				isValid: true,
			},
		},
		true
	);

	// For form submit btn
	const updateHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs); // To be sent to server
	};

	// If place not exists
	if (!property) {
		return (
			<div className='center'>
				<h2>Sorry, we could not find place!</h2>
			</div>
		);
	}

	return (
		<form
			className='place-form'
			onSubmit={updateHandler}
		>
			<Input
				id='title'
				element='input'
				type='text'
				label='Title'
				Validator={[VALIDATOR_REQUIRED()]}
				errorText='Please enter a valid title.'
				onInput={inputHandler}
				initialValue={formState.inputs.title.value}
				initValidity={formState.inputs.title.isValid}
			/>
			<Input
				id='description'
				element='textarea'
				label='Description'
				Validator={[VALIDATOR_MINLENGTH(5)]}
				errorText='Please enter minimum of 5 characters.'
				onInput={inputHandler}
				initialValue={formState.inputs.description.value}
				initValidity={formState.inputs.description.isValid}
			/>
			<div className='btn-center'>
				<Button
					type='submit'
					disabled={!formState.isValid}
				>
					Update
				</Button>
			</div>
		</form>
	);
};

export default UpdateProperty;
