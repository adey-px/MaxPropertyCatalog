import React from 'react'

import Card from '../../shared/components/element/Card'
import UserDisplay from './UserDisplay'
import "./UserAnchor.css"


const UserAnchor = props => {
    // if no user
    if (props.user.length === 0) {
        return <div className="center">
                <Card className="user-item__content">
                    <h2>No users found here!!</h2>
                </Card>
        </div>
    }
    // if user, assign properties to userDisplay comp
    return <ul className="users-list">
        {props.user.map(eachUser =>
            <UserDisplay key={eachUser.id} 
                      id={eachUser.id}
                      name={eachUser.name}
                      image={eachUser.image}
                      places={eachUser.places}
            />
        )}
    </ul>
}

export default UserAnchor