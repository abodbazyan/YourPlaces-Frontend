import React from 'react';
import { useParams } from 'react-router-dom';

import UserPlaceList from '../components/UserPlaceList';

const DUMMY_PLACES = [
  // {
  //   id: 'p1',
  //   title: 'Empire State Building',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum enim illo numquam ut labore voluptatem tempore ullam impedit ab!',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1516577165541-1ed0fe9f23de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000',
  //   address: '20 W 34th St. Germany,Berlin',
  //   location: {
  //     lat: 40.7484405,
  //     lng: -73.9878584,
  //   },
  //   creator: 'u1',
  // },
  // {
  //   id: 'p2',
  //   title: 'Empire State Building',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum enim illo numquam ut labore voluptatem tempore ullam impedit ab!',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1584183502231-bf13b7dae5f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000',
  //   address: '20 W 34th St. Germany,Berlin',
  //   location: {
  //     lat: 40.7484405,
  //     lng: -73.9878584,
  //   },
  //   creator: 'u2',
  // },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((el) => el.creator === userId);

  return <UserPlaceList items={loadedPlaces} />;
};

export default UserPlaces;
