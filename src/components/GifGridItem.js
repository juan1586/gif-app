import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {
    return (
        <>
            <div className="card animate__animated animate__backInLeft">
                <img src= { url } alt= { title } />
                { title }
            </div>
        </>

       
    )
}
