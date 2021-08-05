import React from 'react'
import GifGridItem from './GifGridItem';
import useFetchGifs from './hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <div className="card-grid animate__animated animate__fadeIn">

            {
                loading && <p className="animate__animated animate__flash">Cargando...</p>
            }

            {
                images.map(image => (
                    <GifGridItem 
                        key={image.id} 
                        {...image}
                    >
                    </GifGridItem>
                ))
            }
        </div>
    )
}

export default GifGrid
