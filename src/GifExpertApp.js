import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';


export const GifExpertApp = (setCategory) => {


  const [categories, setCategories] = useState(['goku']);

  return (
      <>
        <h2 className="text">GifApp Melito Caramelito</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr></hr>  
          {
            categories.map( (cat ) =>{
              return <span key ={ cat }> <GitGrid category={cat}/></span>
            })
          }
      </>
  )
}
