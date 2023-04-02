import { useCallback, useReducer } from 'react';

// formReducer for useReducer below
const formReducer = (state, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			let formIsValid = true;
			for (const inputId in state.inputs) {
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

		default:
			return state;
	}
};

/*
Custom hook for newPlace and updatePlace place
*/
export const useFetch = (formContent, formValidity) => {
	// For newPlace comp
	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({
			type: 'INPUT_CHANGE',
			inputId: id,
			value: value,
			isValid: isValid,
		});
	}, []);

	// For updatePlace comp
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: formContent,
		isValid: formValidity,
	});

	return [formState, inputHandler];
};
