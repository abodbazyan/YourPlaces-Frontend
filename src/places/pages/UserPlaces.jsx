import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import UserPlaceList from '../components/UserPlaceList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserPlaces = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8000/api/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {
        // NOTE: Handled in the useHttpClient hook
      }
    };

    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevState) =>
      prevState.filter((el) => el.id !== deletedPlaceId)
    );
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <UserPlaceList
          items={loadedPlaces}
          onDeletePlace={placeDeletedHandler}
        />
      )}
    </Fragment>
  );
};

export default UserPlaces;
