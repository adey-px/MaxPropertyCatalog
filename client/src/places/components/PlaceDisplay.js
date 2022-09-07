import React, {useState} from 'react';

import Card from '../../shared/element/Card';
import Button from '../../shared/form/Button';
import Modal from '../../shared/element/Modal';
import Map from '../../shared/element/Map';
import './PlaceDisplay.css';


const PlaceDisplay = props => {

  // State hook and handler for Modal in shared element
  const [showMap, setShowMap] = useState(false);

  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);
    
  return (
    <React.Fragment>

      <Modal show={showMap} 
             onCancel={closeMap} 
             header={props.address}
             contentClass="place-item__modal-content"
             footerClass="place-item__modal-actions"
             footer={
              <Button onClick={closeMap}>Close</Button>
             }
      >
        <div className="map-container"> 
          {/* From Map comp in element */}
          <Map center={props.coordinates}
               zoom={16}
          />
        </div>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} 
                 alt={props.title} 
            />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMap}>
              View On Map
            </Button>

            <Button to={`/update-place/${props.id}`}>
              Edit
            </Button>

            <Button danger>
              Delete
            </Button>
          </div>
        </Card>
      </li>

    </React.Fragment>
  );
}

export default PlaceDisplay;