import React from 'react';
import Card from '../../features/element/Card';
import UserItem from './UserItem';
import './userList.css';

// Display user based on properties
const UserList = (props) => {
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
	// if user
	return (
		<ul className='users-list'>
			{props.users.map((user) => (
				<UserItem
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

export default UserList;
