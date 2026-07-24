// import React from 'react'

import { useState } from "react"

const CartItem = () => {
    let [item, setItem] = useState({
        name : "Laptop",
        price : 50000,
        qty : 1
    })
  return (
    <div>
        <h2>Name:{item.name}</h2>
        <h2>Price: Rs {item.price}</h2>
        <h2>Quantity: Rs {item.qty}</h2>
        <p>Total : Rs {item.price * item.qty}</p>

        <button onClick={() => setItem({...item, qty:item.qty+1})}>+</button>
        <button onClick={() => setItem({...item, qty:item.qty-1})}>-</button>
    </div>
  )
}

export default CartItem