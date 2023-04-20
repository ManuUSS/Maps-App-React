import { useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';


export interface MapState {
    isMapReady: boolean;
    map?      : Map;
}

const INITIAL_STATE:MapState = {
    isMapReady: false,
    map: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }:Props) => {

    const [state, dispatch] = useReducer( mapReducer, INITIAL_STATE );

    const setMap = ( map: Map ) => {

        const myPopUp = new Popup()
            .setHTML(`<h4>Aqui estoy</h4>`)

        new Marker()
            .setLngLat( map.getCenter() )
            .setPopup( myPopUp )
            .addTo( map );

        dispatch({ type: 'SetMap', payload: map });
    }

    return (
        <MapContext.Provider value={{ ...state, setMap }}>
            { children }
        </MapContext.Provider>
    )
}
