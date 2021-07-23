import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from './hooks/useFetchGif';

export const GitGrid = ({ category }) => {

   
    const { data: images ,loading} = useFetchGif( category );

    return (
        <>

            { loading && 'Cargando'}

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
