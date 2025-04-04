import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const items = [
    { id: 1, name: "Item One", description: "This is the first item." },
    { id: 2, name: "Item Two", description: "This is the second item." },
    { id: 3, name: "Item Three", description: "This is the third item." }
  ];

const ItemList = () => {
    useEffect(()=>{
        console.log("items",items)

    },[])
  return (
    <div>
      <h2>Item List</h2>
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
