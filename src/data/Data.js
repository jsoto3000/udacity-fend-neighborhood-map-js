

import { Place } from './Models';
import { PlaceCategory } from './Models';

// These are the initial data of places
// If foursquare API does not work, they will show only these information.

const Restaurant = new PlaceCategory('restaurant', 'Restaurants', 'fa-utensils');
const Mall = new PlaceCategory('mall', 'Malls', 'fa-shopping-cart');
const Sight = new PlaceCategory('sight', 'Sights', 'fa-camera-retro');
const Business = new PlaceCategory('business', 'Business', 'fa-building');

export const PLACES = [
    new Place('1', 'Spartan', 41.573455, -73.084686, Restaurant, ''),
    new Place('2', 'Signatures', 41.555928, -73.042080, Restaurant, ''),
    new Place('3', 'Waterbury Mall', 41.549083, -73.024514, Mall, ''),
    new Place('4', 'Diorio', 41.554360, -73.041458, Restaurant, ''),
    new Place('5', 'The Thirsty Goat', 41.554175, -73.039409, Restaurant, ''),
    new Place('6', 'Mammatuck Musuem', 41.557615, -73.043260, Sight, ''),
    new Place('7', 'Colonial Plaza', 41.562188, -7-73.054956, Business, ''),
    new Place('8', 'Burger King', 41.562035, -73.053400, Restaurant, ''),
    new Place('9', 'Basilical of the Immaculate Conception', 41.557351, -73.041308, Sight, ''),
];

export const CATEGORIES = [
    Restaurant,
    Mall,
    Sight,
    Business
];