

import { Place } from './Models';
import { PlaceCategory } from './Models';

// These are the initial data of places
// If foursquare API does not work, they will show only these information.

const Restaurant = new PlaceCategory('restaurant', 'Restaurants', 'fa-utensils');
const Mall = new PlaceCategory('mall', 'Malls', 'fa-shopping-cart');
const Sight = new PlaceCategory('sight', 'Sights', 'fa-camera-retro');
const Business = new PlaceCategory('business', 'Business', 'fa-building');

export const PLACES = [
    new Place('1', 'Spartan', 41.573455, -73.084686, Restaurant, '4b849f52f964a520b83e31e3'),
    new Place('2', 'Signatures', 41.555928, -73.042080, Restaurant, '4c799e68bd346dcb8a2cf6ef'),
    new Place('3', 'Brass Mill Center', 41.549083, -73.024514, Mall, '4b12a8b0f964a520f48b23e3'),
    new Place('4', 'Diorio', 41.554360, -73.041458, Restaurant, '4bac00aff964a5202ddd3ae3'),
    new Place('5', 'The Thirsty Goat', 41.554175, -73.039409, Restaurant, '505b7ec7e4b0242158ac666b'),
    new Place('6', 'Mattatuck Musuem', 41.557615, -73.043260, Sight, '4c65521cd02b20a1ca1f9d90'),
    new Place('7', 'Dollar General', 41.539869,  -73.061551, Business, '59ece8ebf427de25c345715f'),
    new Place('8', 'Burger King', 41.565969,  -73.053291, Restaurant, '4b77204ff964a520ef7f2ee3'),
    new Place('9', 'Basilical of the Immaculate Conception', 41.557351, -73.041308, Sight, '4e501170d22daf51d27f523e'),
];

export const CATEGORIES = [
    Restaurant,
    Mall,
    Sight,
    Business
];
