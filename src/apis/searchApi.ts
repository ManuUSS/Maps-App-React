import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibWFudWpzIiwiYSI6ImNsYTM2YjVwYjBvNHkzd28zMDBneTUwMXgifQ.sSgFALIlmcliHgXKQQidQw'
    }
});

export default searchApi;