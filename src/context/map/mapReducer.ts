import { Map } from 'mapbox-gl';
import { MapState } from './MapProvider';


type MapAction = { type: 'SetMap', payload: Map };

export const mapReducer = ( state:MapState, action:MapAction ):MapState => {

    switch ( action.type ) {
        case 'SetMap':
            return {
                ...state
            }
    
        default:
            return state;
    }
}