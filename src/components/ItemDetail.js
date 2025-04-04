import React from 'react'
import { useParams } from "react-router-dom";

const items = [
    { id: 1, name: "Item 1", description: "This is the first item." },
    { id: 2, name: "Item 2", description: "This is the second item." },
    { id: 3, name: "Item 3", description: "This is the third item." }
  ];

const ItemDetail = () => {
    const {id}=useParams();
    const item=items.find((item)=>item.id===parseInt(id))

    if(!item) return <p>Item not Found</p>

  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      
    </div>
  )
}

export default ItemDetail
