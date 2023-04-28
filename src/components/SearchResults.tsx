import React, { useContext } from 'react'
import { PlacesContext } from '../context'

export const SearchResults = () => {

    const { places, isLoadingPlaces } = useContext( PlacesContext );

  return (
    <ul className='list-group mt-3'>
        {
            places.map( ( place ) => (
                <li 
                    key={ place.id }
                    className='list-group-item list-group-item-action'>
                    <h6>Lugar</h6>
                    <p 
                        className='text-muted' 
                        style={{ fontSize: '12px' }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae praesentium laboriosam soluta fuga repellendus, enim modi reprehenderit nemo quia facere at esse ipsam, amet hic voluptatibus nihil nam mollitia illum!
                    </p>
                    <button className='btn btn-outline-primary btn-sm'>Direcciones</button>
                </li>
            ))
        }
    </ul>
  )
}
