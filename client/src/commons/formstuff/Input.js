import React, { useReducer, useEffect } from 'react';
import { validate } from './validators';

import './Input.css';


// Pre-define useReducer for Input comp below
const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case "TOUCH": {
            return {
                ...state,
                isTouched: true,
            }
        }
        default:
            return state;
    }
};


// Input comp starts here
const Input = props => {

    // When user inputs. Set values from updatePlace comp
    const [inputState, dispatch] = useReducer(inputReducer, { 
        value: props.initialValue || " ",
        isTouched: false,
        isValid: props.initValidity || false
    });

    // For inputHandler in newPlace comp
    const {id, onInput} = props;
    const {value, isValid}  = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: "CHANGE",
            val: event.target.value,
            validators: props.validators                
        });
    };
    
    // To delay validator till user input something
    const touchHandler = () => {
        dispatch({
            type: "TOUCH"
        });
    };

    // Form input for newPlace comp 
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
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 
            "form-control--invalid"}`}
        >
            <label htmlFor={props.id}>
                {props.label}
            </label>

            {element}
            
            { !inputState.isValid && inputState.isTouched && 
                <p>{props.errorText}</p>
            }
        </div>
    );
};

export default Input;