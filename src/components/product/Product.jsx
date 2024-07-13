import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

import { ProductCategories } from './ProductCategories';


function Product() {
  const [activeProduct, setActiveProducts] = useState("L.P.G. Adaptors");




  return (
    <div className="flex">
      <div className=''>
        {ProductCategories.map((product) =>
          <div onClick={() => {
            setActiveProducts(product.categoryName)
          }} key={product.categoryName} className={`p-4 border ${activeProduct===product.categoryName? "bg-blue-400" :""} cursor-pointer border-gray-200 flex justify-between`}>
           <span> {product.categoryName}</span>
           <span>{">"}</span>
          </div>
        )}
      </div>
      <div className='p-6'>
        <span className='bg-sky-300 p-4 rounded-xl justify-center text-xl -mt-6 flex'>{activeProduct.toUpperCase()}</span>
        <div className='grid md:grid-cols-2 col-span-1 place-items-center gap-4'>
          {
            ProductCategories.filter((product) => product.categoryName === activeProduct)[0].products.map((item) =>
              <ProductCard key={item.imageURL} imageUrl={item.imageURL} type={item.type} inletConnection={item.inletConnection} outletConnection={item.outletConnection} deliveryPressure={item.deliveryPressure} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Product