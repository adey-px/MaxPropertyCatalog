import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const ViewPlace = () => {
	const DUMMY_PLACES = [
		{
			id: 'place1',
			title: 'London State Building',
			description:
				'One of the most famous sky scrapers in the world!',
			imageUrl:
				'https://i.insider.com/629db1d47bc6a80018b66a3a?width=750&format=jpeg&auto=webp',
			address: '20 W 34th St, New York, NY 10001',
			location: {
				lat: 40.7484405,
				lng: -73.9878584,
			},
			creator: 'user1',
		},

		{
			id: 'place2',
			title: 'Dallas State Building',
			description:
				'One of the most famous sky scrapers in the world!',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/features/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
			address: '20 W 34th St, New York, NY 10001',
			location: {
				lat: 40.7484405,
				lng: -73.9878584,
			},
			creator: 'user2',
		},
	];

	// Sort places by user-id encoded in viewPlace url in App
	const userID = useParams().uid;

	const userPlaces = DUMMY_PLACES.filter(
		(place) => place.creator === userID
	);

	// Display data for places in placeAnchor comp
	return <PlaceList places={userPlaces} />;
};

export default ViewPlace;
