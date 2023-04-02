import React, { useRef, useEffect } from 'react';
import './Map.css';

// Google map sdk API with key in public index
const Map = (props) => {
	const mapRef = useRef();
	const { center, zoom } = props;

	useEffect(() => {
		// Map
		const map = new window.google.maps.Map(mapRef.current, {
			center: center,
			zoom: zoom,
		});
		// Marker
		new window.google.maps.Marker({
			position: center,
			map: map,
		});
	}, [center, zoom]);

	return (
		<div
			ref={mapRef}
			style={props.style}
			className={`map ${props.className}`}
		></div>
	);
};

export default Map;
