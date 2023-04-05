import React from 'react';
import PropertyItem from './PropertyItem.js';
import './propertyList.css';

//
const PropertyList = (props) => {
	// Props from Propertytem
	return (
		<ul className='place-list'>
			{props.items.map((property) => (
				<PropertyItem
					key={property.id}
					id={property.id}
					image={property.imageUrl}
					title={property.title}
					description={property.description}
					address={property.address}
					creatorId={property.creator}
					coordinates={property.location}
				/>
			))}
		</ul>
	);
};

export default PropertyList;
