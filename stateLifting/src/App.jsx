// import quantity from "./Components/quantity"
import { useState } from "react"
import Quantity from "./Components/quantity"

function App() {
  const [qty,setQty] = useState(1)
    const price = 500
  

  return (
    <>
<Quantity />
    </>
  )
}

export default App
