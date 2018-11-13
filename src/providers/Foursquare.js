// Foursquare API Provider
// Provides the basic methods for accessing the API


const URL = 'https://api.foursquare.com/v2/';
const CLIENT_ID = 'ZRKYGFU3YZO1ENL0N5CDZVX3XFSRNUFEHREBBKHRMF5UZ3AG';
const CLIENT_SECRET = 'YSPM1AGFO5TYTTQXV1ENDYZV3OZE3TFJFBXUGO1Z1KSTY4UD';

const headers = {
    'Accept': 'application/json',
    'mode': 'cors'
}

export const getDetail = (id) => 
    fetch(`${URL}/venues/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180510`, {...headers})
    .then(res => res.json())
    .then(data => data);

export const searchFor = (query, lat, lng) => 
    fetch(`${URL}/venues/search?query=${query}&ll=${lat},${lng}`, {...headers})
    .then(res => res.json())
    .then(data => data);