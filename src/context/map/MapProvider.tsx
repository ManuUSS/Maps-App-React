import { Map } from 'mapbox-gl';
import { MapContext } from './MapContext';


export interface MapState {
    isMapReady: boolean;
    map?      : Map;
}

const INITIAL_STATE:MapState = {
    isMapReady: false,
    map: undefined
}

export const MapProvider = () => {
  return (
    <MapContext.Provider value={{}}>

    </MapContext.Provider>
  )
}
