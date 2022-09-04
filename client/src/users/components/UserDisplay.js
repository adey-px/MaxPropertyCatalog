import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from '../../shared/element/Avatar';
import Card from '../../shared/element/Card';
import "./UserDisplay.css";


// Display data for user in userAnchor comp
const UserDisplay = props => {
  return (
    <div>
        <list className="user-item">

            <Card className="user-item__content">
                <Link to={`/${props.id}/user-places`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} 
                                alt={props.name}
                        />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.places} {props.places === 1 ? "Place" : "Places"}
                        </h3>
                    </div>
                </Link>
            </Card>
         
        </list>
    </div>
  );
}


export default UserDisplay;