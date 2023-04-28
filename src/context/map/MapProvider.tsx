import { useContext, useEffect, useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { PlacesContext } from '../places/PlacesContext';


export interface MapState {
    isMapReady: boolean;
    map?      : Map;
    markers   : Marker[];
}

const INITIAL_STATE:MapState = {
    isMapReady: false,
    map: undefined,
    markers: [],
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }:Props) => {

    const [ state, dispatch ] = useReducer( mapReducer, INITIAL_STATE );
    const { places } = useContext( PlacesContext );

    useEffect(() => {
        state.markers.forEach( marker => marker.remove() );
        const newMarkers: Marker[] = [];
        for (const place of places ) {
            const [ lng, lat ] = place.center;
            const popUp = new Popup()
                .setHTML(`
                    <h6>${ place.text_es }</h6>
                    <p>${ place.place_name_es }</p>
                `);

            const newMarker = new Marker()
                .setPopup( popUp )
                .setLngLat([ lng, lat ])
                .addTo( state.map! );
            
            newMarkers.push( newMarker );
        }
    }, [ places ])
    

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
