﻿import { IPlaceCard } from '../types';
import {cities} from '../mocks/cities';

export const offers: IPlaceCard[] = [
  {
    id: 1,
    isPremium: true,
    imageSrc: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    location: {
      latitude: 48.8520,
      longitude: 2.3332
    },
    city: cities.Paris,
  },
  {
    id: 2,
    isBookmarked: true,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    name: 'Wood and stone place',
    type: 'Room',
    location: {
      latitude: 48.8566,
      longitude: 2.3522
    },
    city: cities.Paris,
  },
  {
    id: 3,
    imageSrc: 'img/apartment-02.jpg',
    price: 132,
    rating: 4,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    },
    city: cities.Amsterdam,
  },
  {
    id: 4,
    isPremium: true,
    imageSrc: 'img/apartment-03.jpg',
    price: 180,
    rating: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    },
    city: cities.Amsterdam,
  },
  {
    id: 5,
    isBookmarked: true,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: 4,
    name: 'Wood and stone place',
    type: 'Room',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198
    },
    city: cities.Paris,
  },
];
