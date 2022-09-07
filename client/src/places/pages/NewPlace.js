import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/form/Input';
import Button from '../../shared/form/Button';
import { VALIDATOR_MINLENGTH, 
        VALIDATOR_REQUIRED } from '../../shared/form/validators';
import './NewPlace.css';


// For useReducer below
const formReducer = (state, action) => {

  switch (action.type)  {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          }
        },
        isValid: formIsValid
      };
    
    default:
      return state;
  }
};

////////////////////////
// NewPlace comp starts here
const NewPlace = () => {

  // Set initial state for inputReducer
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {value: "", isValid: false},
      description: {value: "", isValid: false},
      address: {value: "", isValid: false}
    },

    isValid: false
  });

  // From useEffect hook in Input comp 
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      value: value, 
      isValid: isValid,
    });
  }, []);

  // For form submit btn
  const submitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // To be sent to server
  };

  return (
    // Input from Input comp in form dir
    <form className="place-form" onSubmit={submitHandler}>
      <Input id="title"
             element="input" 
             type="text" 
             label="Title"
             validators={[VALIDATOR_REQUIRED()]}
             errorText="Please enter a valid title" 
             onInput={inputHandler}   
      />
      <Input id="description"
             element="textarea" 
             label="Description"
             validators={[VALIDATOR_MINLENGTH(5)]}
             errorText="Minimum of 5 characters is required" 
             onInput={inputHandler}   
      />
      <Input id="address"
             element="input" 
             label="Address"
             validators={[VALIDATOR_REQUIRED()]}
             errorText="Please enter a valid address" 
             onInput={inputHandler}   
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>

  );
};

export default NewPlace;