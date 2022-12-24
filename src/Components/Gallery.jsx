import React from 'react'
import Item from './Item'
import { postings } from '.../postings'

function Gallery() {
    return (
        <div>
     <div>

     </div>
     <div>
        {postings.map((data, i) => <Item data ={data} key =
        {i} /> )}
     </div>
        </div>
    )
}

export default Gallery 