import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWpzIiwiYSI6ImNsYTM2YjVwYjBvNHkzd28zMDBneTUwMXgifQ.sSgFALIlmcliHgXKQQidQw';

if( !navigator.geolocation ) {
  alert( 'Tu navegador no tiene opcion de geolocalizacion' )
  throw new Error( 'Tu navegador no tiene opcion de geolocalizacion' );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

