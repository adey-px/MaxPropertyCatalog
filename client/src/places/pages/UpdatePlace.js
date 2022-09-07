import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/form/Input';
import Button from '../../shared/form/Button';
import {VALIDATOR_REQUIRED, VALIDATOR_MINLENGTH
    } from '../../shared/form/validators';
import './NewPlace.css';


const DUMMY_PLACES = [
    {
      id: 'place1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },

      creator: 'user1',
    },

    {
      id: 'place2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      
      creator: 'user2',
    }
  ];


//
const UpdatePlace = () => {

    // Get place id - pid from url in App route
    const placeId = useParams().pid;
    
    // Retrieve place from db
    const getPlace = DUMMY_PLACES.find(
                        place => place.id === placeId);

    if (!getPlace) {
        return (
        <div className="center">
            <h2>Sorry, we could not find place!</h2>
        </div>
        );
    }

    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRED()]}
                errorText="Please enter a valid title."
                onInput={() => {}}
                value={getPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter minimum of 5 characters."
                onInput={() => {}}
                value={getPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                Update
            </Button>
        </form>
    );
};

export default UpdatePlace;