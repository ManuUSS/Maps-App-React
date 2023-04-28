import { PlacesState } from "./PlacesProvider";
import { Feature } from '../../interfaces/places';

type PlacesAction = 
  { type: 'setUserLocation', payload: [ number, number ] }
| { type: 'setPlaces', payload: Feature[] };

export const placesReducer = ( state: PlacesState, action: PlacesAction ): PlacesState => {

    switch( action.type ) {
        case 'setUserLocation': 
            return {
                ...state,
                userLocation: action.payload,
                isLoading   : false
            }
        

        default: 
            return state;
        
    }

}