import React from 'react'

function Card({src,productName}) {
  return (
    <div className='w-80 p-4 m-2 my-8 rounded-xl shadow-2xl border border-gray-50'>
        <img src={src} alt="product" />
        <span>{productName}</span>
    </div>
  )
}

export default Card