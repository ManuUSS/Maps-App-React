import React, { useContext } from 'react'
import { PlacesContext } from '../context'

export const SearchResults = () => {

    const { places, isLoadingPlaces } = useContext( PlacesContext );

    if( isLoadingPlaces ) 
        return ( 
            <div className='alert alert-primary mt-2 text-center'>
                <h6>Buscando...</h6>
                <p>Espere por favor</p>
            </div> 
        )

    return (
        <ul className='list-group mt-3'>
            {
                places.map( ( place ) => (
                    <li 
                        key={ place.id }
                        className='list-group-item list-group-item-action'>
                        <h6>{ place.text }</h6>
                        <p 
                            className='text-muted' 
                            style={{ fontSize: '12px' }}
                        >
                            { place.place_name }
                        </p>
                        <button className='btn btn-outline-primary btn-sm'>Direcciones</button>
                    </li>
                ))
            }
        </ul>
    )
}
