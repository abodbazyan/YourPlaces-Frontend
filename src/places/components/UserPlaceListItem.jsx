import React, { useState, Fragment } from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import Button from '../../shared/components/FormElements/Button/Button';
import Modal from '../../shared/components/UIElements/Modal/Modal';
import Map from '../../shared/components/UIElements/Map/Map';
import './UserPlaceListItem.css';

const UserPlaceListItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap((prevState) => !prevState);

  const closeMapHandler = () => setShowMap((prevState) => !prevState);

  const openConfirmModalHandler = () =>
    setShowConfirmModal((prevState) => !prevState);

  const closeConfirmModalHandler = () =>
    setShowConfirmModal((prevState) => !prevState);

  const confirmDeleteHandler = () => {
    // NOTE: send delete request to the backend
    console.log('Deleted');
  };

  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={closeConfirmModalHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <Fragment>
            <Button inverse onClick={closeConfirmModalHandler}>
              CLOSE
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? please note that it
          cannot be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger onClick={openConfirmModalHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default UserPlaceListItem;
