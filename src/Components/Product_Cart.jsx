// import React from 'react'
import './Card.css'
import Product_list from './Product_list'
const Product_Cart = () => {

    let products = [
        {id:1, name:"Shoes", price:999},
        {id:2, name:"Watch", price:2999},
        {id:3, name:"HeadPhones", price:3999},
        {id:4, name:"Phone", price:4999},
        {id:5, name:"laptop", price:5999}
    ]
  return (
    <div>
        <h1>Hello</h1>
        <Product_list products={products}/>
    </div>
  )
}

export default Product_Cart