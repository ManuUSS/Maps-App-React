import { Map, Marker } from 'mapbox-gl';
import { MapState } from './MapProvider';


type MapAction = 
| { type: 'SetMap', payload: Map }
| { type: 'SetMarkers', payload: Marker[] }

export const mapReducer = ( state:MapState, action:MapAction ):MapState => {

    switch ( action.type ) {
        case 'SetMap':
            return {
                ...state,
                isMapReady: true,
                map: action.payload
            }

        case 'SetMarkers':
            return {
                ...state,
                markers: action.payload
            }
    
        default:
            return state;
    }
}