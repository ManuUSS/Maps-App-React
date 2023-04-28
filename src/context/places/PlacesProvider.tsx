import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers";
import { searchApi } from "../../apis";
import { PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
    isLoading    : boolean;
    userLocation?: [ number, number ];
}

const INITIAL_STATE:PlacesState = {
    isLoading: true,
    userLocation: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children } : Props ) => {

    const [ state, dispatch ] = useReducer( placesReducer, INITIAL_STATE );

    useEffect(() => {
        getUserLocation()
            .then( lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }))
    }, []);


    const searchPlacesByTerm = async ( query: string ) => {
        if( query.length === 0 ) return [];
        if( !state.userLocation ) throw new Error('No hay ubicacion del usuario')
        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        })
    }
    

    return (
        <PlacesContext.Provider value={{ 
            ...state, 
            searchPlacesByTerm
        }}
        >
            { children }
        </PlacesContext.Provider>
    )
}
