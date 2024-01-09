import React from 'react'
import './products.css'

const Products = ({productItems , handleAddProduct}) => {
  return (
    <div className="products">
        {productItems.map((productItem) => (
            <div className="card" >
                <div>
                    <img src= {productItem.img} alt={productItem.img} className='product-image'/>
                </div>

            <div>
                <h3 className='product-name'>
                    {productItem.name}
                </h3>
            </div>

            <div className="product-price">
                ${productItem.price}
            </div>

            <div>
                <button className='product-add-btn' onClick={() =>handleAddProduct(productItem)}>Add to cart</button>
            </div>

            </div>
        ))}
    </div>

    
  )
}

export default Products
