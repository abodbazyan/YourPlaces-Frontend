import React from 'react';

import UserPlaceListItem from './UserPlaceListItem';
import Card from '../../shared/components/UIElements/Card/Card';
import './UserPlaceList.css';

const UserPlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found, Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((el) => (
        <UserPlaceListItem
          key={el.id}
          id={el.id}
          image={el.imageUrl}
          title={el.title}
          description={el.description}
          address={el.address}
          creatorId={el.creator}
          coordinates={el.location}
        />
      ))}
    </ul>
  );
};

export default UserPlaceList;