import React from 'react';

import Card from '../../shared/element/Card';
import PlaceDisplay from './PlaceDisplay';
import Button from '../../shared/form/Button';
import './PlaceAnchor.css';


const PlaceAnchor = props => {

    // If no places found
    if (props.places.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>Sorry, no places found here</h2>
                    <Button to="/new-place">
                        Share Place
                    </Button>
                </Card>
            </div>
        )
    };

    // If places, create properties for placeDisplay comp
    return (
        <ul className='place-list'>
            {props.places.map(place => (
                <PlaceDisplay 
                    key={place.id} 
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location}
                />
            ))}
        </ul>
    );

}

export default PlaceAnchor;