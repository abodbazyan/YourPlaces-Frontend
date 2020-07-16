import React, { useState, Fragment, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import Button from '../../shared/components/FormElements/Button/Button';
import Modal from '../../shared/components/UIElements/Modal/Modal';
import Map from '../../shared/components/UIElements/Map/Map';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal/ErrorModal';
import './UserPlaceListItem.css';

const UserPlaceListItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const auth = useContext(AuthContext);

  const openMapHandler = () => setShowMap((prevState) => !prevState);

  const closeMapHandler = () => setShowMap((prevState) => !prevState);

  const openConfirmModalHandler = () =>
    setShowConfirmModal((prevState) => !prevState);

  const closeConfirmModalHandler = () =>
    setShowConfirmModal((prevState) => !prevState);

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:8000/api/places/${props.id}`,
        'DELETE'
      );
      props.onDelete(props.id);
    } catch (err) {
      // NOTE: Handled in the useHttpClient hook
    }
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
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
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img
              src={`http://localhost:8000/${props.image}`}
              alt={props.title}
            />
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
            {auth.isLoggedIn && auth.userId === props.creatorId && (
              <Fragment>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger onClick={openConfirmModalHandler}>
                  DELETE
                </Button>
              </Fragment>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default UserPlaceListItem;
