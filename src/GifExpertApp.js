import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Nirvana']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid category={ category } key={ category }></GifGrid>
                    ))
                }
            </ol>
        </>
    )
}



export default GifExpertApp
