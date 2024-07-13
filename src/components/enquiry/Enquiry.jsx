import React from 'react'

function Enquiry() {
  return (
    <div className='flex'>
      <div className='flex-[0.5]'>
        Image
      </div>
      <div className='flex-[0.5] p-4 border rounded-md shadow-2xl border-gray-100 m-6'>
        <p className='bg-blue-500 text-white py-4'>Let us know your query.</p>
        <form action="" className='flex flex-col'>
          <label>Name</label>
          <input className='border border-gray-500 p-1 rounded-sm my-2
          ' type="text" placeholder='Ex. Rahul Awasthi' />
          <label>Phone Number</label>
          <input className='border border-gray-500 p-1 rounded-sm my-2
          ' type="text" placeholder='Ex. 9987654321' />
          <label>Email Address</label>
          <input className='border border-gray-500 p-1 rounded-sm my-2
          ' type="text" placeholder='Ex. abc@example.com' />
          <label>Company Name</label>
          <input className='border border-gray-500 p-1 rounded-sm my-2
          ' type="text" placeholder='Ex. Tech Shine Industries' />
          <div className='flex items-center'>
            <div className='flex-[0.5] flex flex-col p-2 pl-0'>
              <label>City</label>
              <input className='border border-gray-500 p-1 rounded-sm my-2
              ' type="text" placeholder='Ex. Hissar' />
            </div>
            <div className='flex-[0.5] flex flex-col p-2'>
              <label>State</label>
              <input className='border border-gray-500 p-1 rounded-sm my-2
              ' type="text" placeholder='Ex. Haryana' />
            </div>
          </div>
          <div className='mt-4 mr-4'>
            <label>Query</label>
            <textarea name="" id="" placeholder='Enter your query here.' className='w-full border border-gray-500' rows="6"></textarea>
          </div>

          <button className='bg-sky-500 w-fit text-white text-2xl px-8 mt-4 ml-4 mb-2 font-semibold py-2 rounded-3xl'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Enquiry