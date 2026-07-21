// import React from 'react'

const Fruit_Item = () => {

    let fruits = ["Mango", "Apple", "Litchi", "Banana"]
  return (
    <div>
        <ul>
           {/* <li>{fruits[0]}</li>
           <li>{fruits[1]}</li>
           <li>{fruits[2]}</li>
           <li>{fruits[3]}</li> */} 
        {/* rather than using list items again and again we can use here loop */}
            {fruits.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Fruit_Item