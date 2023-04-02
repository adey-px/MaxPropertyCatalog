import pkg from 'axios';
import HttpError from './raiseError.js';

//
const { get } = pkg;
const apiKey = 'AIzaSyDgLmMpKCzveJf1_yuA0fUzzhy0WRChvZA';

async function addrCoordinate(address) {
	// return {
	//   lat: 40.7484474,
	//   lng: -73.9871516
	// };
	const response = await get(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
			address
		)}&key=${apiKey}`
	);

	const data = response.data;

	if (!data || data.status === 'ZERO_RESULTS') {
		const error = new HttpError(
			'Could not find location for the specified address.',
			422
		);
		throw error;
	}

	const coordinates = data.results[0].geometry.location;

	return coordinates;
}

export default addrCoordinate;
