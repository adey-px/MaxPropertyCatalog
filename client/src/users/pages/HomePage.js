import React from "react";
import UserList from "../components/UserList";

//
const HomePage = () => {
  const Users = [
    {
      id: "user1",
      name: "Maxwell Bossman",
      image:
        "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
      places: 3,
    },
  ];

  return (
		<UserList users={Users} />
	);
};

export default HomePage;