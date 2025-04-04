import React from 'react'
import { useParams } from "react-router-dom";

const items = [
    { id: 1, name: "Item One", description: "This is the first item." },
    { id: 2, name: "Item Two", description: "This is the second item." },
    { id: 3, name: "Item Three", description: "This is the third item." }
  ];

const ItemDetail = () => {
    const {id}=useParams();
    const item=items.find((item)=>item.id===parseInt(id))

    if(!item) return <p>Item not Found</p>

  return (
    <div>
        <h2>{item.name}</h2>
        <h2>{item.description}</h2>
      
    </div>
  )
}

export default ItemDetail
