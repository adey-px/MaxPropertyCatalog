import React, { useContext, useState } from 'react';
import Card from '../../features/element/Card';
import Input from '../../features/form/Input';
import Button from '../../features/form/Button';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../context/AuthContext';
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRED,
} from '../../features/form/validator';
import './userLogin.css';

//
const UserLogin = () => {
	/* access to hidden navLinks after login */
	const authUser = useContext(AuthContext);

	/* hook to switch login/signup mode */
	const [loginMode, setLoginMode] = useState(true);

	/* useFetch hook from hooks for form state */
	const [formState, inputHandler, setFormData] = useFetch(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	// Switch from login/signup form inputs
	const switchHandler = () => {
		if (!loginMode) {
			setFormData(
				{ ...formState.inputs, name: undefined },
				formState.inputs.email.isValid &&
					formState.inputs.password.isValid
			);
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: '',
						isValid: false,
					},
				},
				false
			);
		}
		setLoginMode((prevMode) => !prevMode);
	};

	// Form submit handler
	const submitHandler = (e) => {
		e.preventDefault();
		authUser.login();
	};

	return (
		<Card className='auth__body'>
			<h2 className='auth__header'>
				{loginMode ? 'Login' : 'Sign up'}
			</h2>

			<hr />
			<form onSubmit={submitHandler}>
				{!loginMode && (
					<Input
						element='input'
						id='name'
						type='text'
						label='Name'
						validator={[VALIDATOR_REQUIRED()]}
						errorText='Please enter a valid email address'
						onInput={inputHandler}
					/>
				)}
				<Input
					element='input'
					id='email'
					type='email'
					label='E-mail'
					validator={[VALIDATOR_EMAIL()]}
					errorText='Please enter a valid email address'
					onInput={inputHandler}
				/>
				<Input
					element='input'
					id='password'
					type='password'
					label='Password'
					validator={[VALIDATOR_MINLENGTH(5)]}
					errorText='Minimum of 5 characters required'
					onInput={inputHandler}
				/>

				{/* Change text on form button by switch btn */}
				<div className='btn-center'>
					<Button
						type='submit'
						disabled={!formState.isValid}
					>
						{loginMode ? 'Login' : 'Sign up'}
					</Button>
				</div>
			</form>

			{/* Switch btn to change from login to signup form*/}
			<div className='btn-center'>
				<Button
					inverse
					onClick={switchHandler}
				>
					{loginMode
						? 'New here? Switch to Sign up.'
						: 'Existing member? Switch to Login.'}
				</Button>
			</div>
		</Card>
	);
};

export default UserLogin;
