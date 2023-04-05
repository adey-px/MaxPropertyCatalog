import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyList from '../components/PropertyList';
import PROPERTIES from '../../datasource/property';

//
const UserProperties = () => {
	const userID = useParams().uid;

	const properties = PROPERTIES.filter(
		(property) => property.creator === userID
	);

	return <PropertyList items={properties} />;
};

export default UserProperties;
