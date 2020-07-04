import React from 'react';

import './UsersList.css';
import UsersListItem from './UsersListItem';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((el) => (
        <UsersListItem
          key={el.id}
          id={el.id}
          image={el.image}
          name={el.name}
          placesCount={el.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
