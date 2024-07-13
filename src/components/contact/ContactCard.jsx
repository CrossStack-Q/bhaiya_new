import React from 'react'

function ContactCard({ imgURL, title, subHead1, optHead, subHead2, buttonText }) {
    return (
        <div className='flex p-6 my-10 mb-6 mx-2 shadow-xl border border-gray-100 rounded-md items-center'>
            <div className='flex-[0.4]'>
                <img className='w-40' src={imgURL} alt="" />
            </div>
            <div className='flex flex-[0.6] flex-col items-center'>
                <span className='text-3xl text-sky-400'>{title}</span>
                { subHead1 && <span className='m-1'>{subHead1}</span> }
                { optHead && <span className='text-2xl mt-4 mb-2'>{optHead}</span> }
                { subHead2 && <span className='m-1'>{subHead2}</span> }
                { buttonText &&
                    <button className='bg-sky-500 text-white px-4 py-2 rounded-lg'>
                        {buttonText}
                    </button>
                }
            </div>
        </div>
    )
}

export default ContactCard