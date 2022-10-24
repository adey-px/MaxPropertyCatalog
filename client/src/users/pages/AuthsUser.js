import React, { useContext, useState } from "react";

import Card from "../../commons/element/Card";
import Input from "../../commons/formstuff/Input";
import Button from "../../commons/formstuff/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../commons/formstuff/validators";

import { useForm } from "../../customHuk/formHook";
import { AuthsContext } from "../../contextApi/AuthsContext";
import "./AuthsUser.css";

const AuthsUser = () => {
  //
  // Allow access to hidden navLinks after user login
  const getAuth = useContext(AuthsContext);

  // State hooks to switch login/signup in form inputs
  const [loginMode, setLoginMode] = useState(true);

  // Call useForm hook from customhook for form state
  const [formState, inputHandler] = useForm(
    //
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // For submit btn in form
  const submitHandler = (event) => {
    event.preventDefault();
    getAuth.login();

    console.log(formState.inputs); // To server
  };

  // Switch from login/signup form inputs
  const switchHandler = () => {
    setLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="auth__body">
      <h2 className="auth__header">{loginMode ? "Member Login" : "Sign up"}</h2>

      <hr />
      <form onSubmit={submitHandler}>
        {/* If not loginMode, show name input */}
        {!loginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRED()]}
            errorText="Please enter a valid email address"
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Minimum of 5 characters required"
          onInput={inputHandler}
        />
        {/* Change text on form button by switch btn */}
        <div className="btn-center">
          <Button type="submit" disabled={!formState.isValid}>
            {loginMode ? "Login" : "Sign up"}
          </Button>
        </div>
      </form>

      {/* Switch btn to change from login to signup form*/}
      <div className="btn-center">
        <Button inverse onClick={switchHandler}>
          {loginMode
            ? "New here? Switch to Sign up."
            : "Existing member? Switch to Login."}
        </Button>
      </div>
    </Card>
  );
};

export default AuthsUser;
