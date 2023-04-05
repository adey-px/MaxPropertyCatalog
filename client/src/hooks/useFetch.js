import { useCallback, useReducer } from 'react';
/*
This is custom hook, not built-in React hook.
Reducer is built first, followed below by hook.
*/
// Reducer fn refer below
const formReducer = (state, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			let formIsValid = true;
			for (const inputId in state.inputs) {
				if (!state.inputs[inputId]) {
					continue;
				}
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid;
				} else {
					formIsValid =
						formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: {
						value: action.value,
						isValid: action.isValid,
					},
				},
				isValid: formIsValid,
			};

		case 'SET_DATA':
			return {
				inputs: action.inputs,
				isValid: action.formIsValid,
			};

		default:
			return state;
	}
};

/*
Custom hook for newPlace and updatePlace place
*/
export const useFetch = (formInputs, formValidity) => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: formInputs,
		isValid: formValidity,
	});

	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({
			type: 'INPUT_CHANGE',
			inputId: id,
			value: value,
			isValid: isValid,
		});
	}, []);

	const setFormData = useCallback(
		(dataInputs, formValidity) => {
			dispatch({
				type: 'SET_DATA',
				inputs: dataInputs,
				formIsValid: formValidity,
			});
		},
		[]
	);

	return [formState, inputHandler, setFormData];
};