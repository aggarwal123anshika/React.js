// import React from 'react'

import { useState } from "react"

  const Quantity = () => {
    const [qty,setQty] = useState(1)
    const price = 500
  return (
    <div>
        <h2>Item : Butter Chicken</h2>
        <button>+</button>
        <span>{qty}</span>
        <button>-</button>
    </div>
  )
}

export default Quantity