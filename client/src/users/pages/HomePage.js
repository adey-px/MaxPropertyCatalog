import React from 'react';
import UserList from '../components/UserList';
import AGENTS from '../../datasource/agent';

//
const HomePage = () => {
	return <UserList users={AGENTS} />;
};

export default HomePage;
