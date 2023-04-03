import React from 'react';
import Card from '../../features/element/Card';
import Button from '../../features/form/Button';
import PlaceItem from './PlaceItem.js';
import './placeList.css';

//
const PlaceList = (props) => {
	// if no places found
	if (props.places.length === 0) {
		return (
			<div className='place-list center'>
				<Card>
					<h2>Sorry, no places found here</h2>
					<Button to='/new-place'>Share Place</Button>
				</Card>
			</div>
		);
	}

	// properties from PlaceItem 
	return (
		<ul className='place-list'>
			{props.places.map((place) => (
				<PlaceItem
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
};

export default PlaceList;
