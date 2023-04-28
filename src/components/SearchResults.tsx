import React from 'react'

export const SearchResults = () => {
  return (
    <ul className='list-group mt-3'>
        <li className='list-group-item list-group-item-action'>
            <h6>Lugar</h6>
            <p 
                className='text-muted' 
                style={{ fontSize: '12px' }}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae praesentium laboriosam soluta fuga repellendus, enim modi reprehenderit nemo quia facere at esse ipsam, amet hic voluptatibus nihil nam mollitia illum!
            </p>
            <button className='btn btn-outline-primary'>Direcciones</button>
        </li>
    </ul>
  )
}
