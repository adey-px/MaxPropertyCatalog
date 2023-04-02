import React, { useState, useContext } from 'react';
import Card from '../../features/element/Card';
import Button from '../../features/form/Button';
import Modal from '../../features/element/Modal';
import Map from '../../features/element/Map';
import { AuthContext } from '../../context/AuthContext';
import './PlaceDisplay.css';
/*
 */
const PlaceDisplay = (props) => {
	const getAuth = useContext(AuthContext);
	const [showMap, setShowMap] = useState(false);
	const [confirmDel, setConfirmDelete] = useState(false);

	/* show & close map */
	const openMap = () => setShowMap(true);
	const closeMap = () => setShowMap(false);

	const warningHandler = () => {
		setConfirmDelete(true);
	};

	const cancelHandler = () => {
		setConfirmDelete(false);
	};

	const deleteHandler = () => {
		setConfirmDelete(false);
	};

	return (
		<React.Fragment>
			{/* Modal from element for map display */}
			<Modal
				show={showMap}
				onCancel={closeMap}
				header={props.address}
				contentClass='place-item__modal-content'
				footerClass='place-item__modal-actions'
				footer={<Button onClick={closeMap}>Close</Button>}
			>
				<div className='map-container'>
					{/* From Map comp in element */}
					<Map
						center={props.coordinates}
						zoom={16}
					/>
				</div>
			</Modal>

			{/* Modal from element for delete button below */}
			<Modal
				show={confirmDel}
				onCancel={cancelHandler}
				header='Warning Alert!!'
				headerClass='bg-warning_color'
				footerClass='place-item__modal-actions'
				footer={
					<React.Fragment>
						<Button
							inverse
							onClick={cancelHandler}
						>
							Cancel
						</Button>

						<Button
							danger
							onClick={deleteHandler}
						>
							Delete
						</Button>
					</React.Fragment>
				}
			>
				<p>
					Are you sure you want to delete place? Action
					can't be undone.
				</p>
			</Modal>

			{/* Place details display with buttons */}
			<li className='place-item'>
				<Card className='place-item__content'>
					<div className='place-item__image'>
						<img
							src={props.image}
							alt={props.title}
						/>
					</div>

					<div className='place-item__info'>
						<h2>{props.title}</h2>
						<h3>{props.address}</h3>
						<p>{props.description}</p>
					</div>

					<div className='place-item__actions'>
						<Button
							inverse
							onClick={openMap}
						>
							View On Map
						</Button>

						{getAuth.loggedIn && (
							<Button to={`/update-place/${props.id}`}>
								Edit
							</Button>
						)}

						{getAuth.loggedIn && (
							<Button
								danger
								onClick={warningHandler}
							>
								Delete
							</Button>
						)}
					</div>
				</Card>
			</li>
		</React.Fragment>
	);
};

export default PlaceDisplay;
