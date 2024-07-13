import React from 'react'

function ProductCard({ imageUrl, type, inletConnection, outletConnection, deliveryConnection }) {
    return (
        <div className='flex p-4 rounded-xl cursor-pointer hover:shadow-2xl my-4 border border-gray-50 shadow-xl'>
            <div className='w-60'>
                <img src={imageUrl} alt="name" />
            </div>
            <div className='flex flex-col justify-center'>
                <span>type: {type}</span>
                <span>InletConnection: {inletConnection}</span>
                <span>OutletConnection: {outletConnection}</span>
                <span>DeliveryConnection: {deliveryConnection}</span>
            </div>
        </div>
    )
}

export default ProductCard