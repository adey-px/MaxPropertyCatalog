import React from 'react';
import Card from '../../features/element/Card';
import Button from '../../features/form/Button';
import PropertyList from '../components/PropertyList';
import PROPERTIES from '../../datasource/property';

//
const ViewProperties = () => {
	if (PROPERTIES.length === 0) {
		return (
			<div className='place-list center'>
				<Card>
					<h2>Sorry, no properties found here</h2>
					<Button to='/account'>Share Property</Button>
				</Card>
			</div>
		);
	}

	// Data for all places
	return <PropertyList items={PROPERTIES} />;
};

export default ViewProperties;
