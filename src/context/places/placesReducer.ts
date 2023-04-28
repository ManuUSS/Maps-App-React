import { PlacesState } from "./PlacesProvider";
import { Feature } from '../../interfaces/places';

type PlacesAction = 
  { type: 'setUserLocation', payload: [ number, number ] }
| { type: 'setPlaces', payload: Feature[] }
| { type: 'setLoadingPlaces' };

export const placesReducer = ( state: PlacesState, action: PlacesAction ): PlacesState => {

    switch( action.type ) {
        case 'setUserLocation': 
            return {
                ...state,
                userLocation: action.payload,
                isLoading   : false
            }
        
        case 'setPlaces': 
            return {
                ...state,
                isLoadingPlaces: false,
                places: action.payload
            }
        
        case 'setLoadingPlaces': 
            return {
                ...state,
                isLoadingPlaces: true,
                places: []
            }
        

        default: 
            return state;
        
    }

}