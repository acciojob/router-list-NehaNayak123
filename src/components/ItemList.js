import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const items = [
    { id: 1, name: "Item 1", description: "This is the first item." },
    { id: 2, name: "Item 2", description: "This is the second item." },
    { id: 3, name: "Item 3", description: "This is the third item." }
  ];

const ItemList = () => {
    useEffect(()=>{
        console.log("items",items)

    },[])
  return (
    <div>
      <h1>Item List</h1>
      <ul>      {
        items.map((item)=>(
            <li key={item.id}>
                <Link to={`/items/${item.id}`}>{item.name}</Link>
            </li>
        ))
      }
      </ul>

    </div>
  )
}

export default ItemList
