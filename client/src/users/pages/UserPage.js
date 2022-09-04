import React from 'react';

import UserAnchor from '../components/UserAnchor';


const UserPage = () => {

  // Dummy data storage for user 
  const USER = [{
    id: "user1",
    name: "Maxwell Bossman",
    image: "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
    places: 3
  }]

  return (
    // Assign data to users in userAnchor comp
    <UserAnchor users={USER} />
  );
}

export default UserPage;