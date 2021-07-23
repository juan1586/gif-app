import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';


export const GifExpertApp = (setCategory) => {

  // const categories = ['uno', 'dos', 'tres'];

   const [categories, setCategories] = useState(['goku']);

  // const handleAdd = () =>{
  //   //setCategories(cats =>[ ...cats, 'Una más' ]);
  // }

  return (
      <>
        <h2>GifExpert App</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr></hr>  
          {
            categories.map( (cat ) =>{
              return <p key ={ cat }> <GitGrid category={cat}/></p>
            })
          }
      </>
  )
}
