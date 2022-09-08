import React from 'react';

import Input from '../../shared/form/Input';
import Button from '../../shared/form/Button';
import { VALIDATOR_MINLENGTH, 
        VALIDATOR_REQUIRED } from '../../shared/form/validators';
import { useForm } from '../../shared/customhook/FormHook';
import './NewPlace.css';


const NewPlace = () => {

  // Call useForm hook from customhook
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  );
  
  // For form submit btn
  const submitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // To be sent to server
  };

  return (
    // Input from Input comp in form dir
    <form className="place-form" onSubmit={submitHandler}>
      <Input 
        id="title"
        element="input" 
        type="text" 
        label="Title"
        validators={[VALIDATOR_REQUIRED()]}
        errorText="Please enter a valid title" 
        onInput={inputHandler}   
      />
      <Input 
        id="description"
        element="textarea" 
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Minimum of 5 characters is required" 
        onInput={inputHandler}   
      />
      <Input 
        id="address"
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