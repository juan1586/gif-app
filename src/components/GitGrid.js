import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from './hooks/useFetchGif';

export const GitGrid = ({ category }) => {

   
    const { data: images ,loading} = useFetchGif( category );

    return (
        <>

            <div className="loading">
                {
                loading && 'Cargando'
                }
            </div>

            <div className="car-grid">
            
                {
                    images.map((img) =>(
                        <GifGridItem 
                            key= { img.id }
                            { ...img }
                        />
                    ))
                }
                
            </div>
        </>
    )
}
