import React from 'react'
import OurProduct from './home/OurProduct'
import Card from './home/Card'
import Carousel from './home/Carousel'
import { images } from './home/CarousalSlide'


import {ProductList} from "./home/ProductList"

function Main() {
  return (
    <div>
      <Carousel images={images}/>
      <OurProduct />
      <div className='grid lg:grid-cols-3 grid-cols-2 lg:max-w-screen-xl gap-4 lg:mx-auto place-items-center'>
        {ProductList.map((product) => (
          <Card key={product.imageUrl} src={product.imageUrl} productName={product.name} />
        ))}
      </div>
    </div>
  )
}

export default Main