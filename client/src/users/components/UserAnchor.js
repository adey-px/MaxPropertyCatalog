import React from 'react';
import Card from '../../features/element/Card';
import UserDisplay from './UserDisplay';
import './UserAnchor.css';

const UserAnchor = (props) => {
	//
	// if no user
	if (props.users.length === 0) {
		return (
			<div className='center'>
				<Card className='user-item__content'>
					<h2>No users found here!!</h2>
				</Card>
			</div>
		);
	}
	// if user, create properties to userDisplay comp
	return (
		<ul className='users-list'>
			{props.users.map((user) => (
				<UserDisplay
					key={user.id}
					id={user.id}
					name={user.name}
					image={user.image}
					places={user.places}
				/>
			))}
		</ul>
	);
};

export default UserAnchor;
