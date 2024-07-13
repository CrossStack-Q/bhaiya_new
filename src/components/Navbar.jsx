import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' flex justify-between items-center p-6'>
      <div>
        <img src="https://unitechlpg.com/images/logo.png" alt="logo" />
      </div>
      <div>
        <ul className='flex space-x-2 mx-6 '>
          <Link to='/home' >
            <li className='px-6 cursor-pointer border-2 hover:-mt-2 hover:bg-sky-300 hover:shadow-3xl border-sky-400 py-2'>

              Home

            </li>
          </Link>
          <Link to='/products' >
            <li className='px-6 cursor-pointer border-2 hover:-mt-2 hover:bg-sky-300 hover:shadow-3xl border-sky-400 py-2'>

              Products

            </li>
          </Link>
          <Link to="/enquiry">
            <li className='px-6 cursor-pointer border-2 hover:-mt-2 hover:bg-sky-300 hover:shadow-3xl border-sky-400 py-2'>

              Enquiry

            </li>
          </Link>
          <Link to="/contact">
            <li className='px-6 cursor-pointer border-2 hover:-mt-2 hover:bg-sky-300 hover:shadow-3xl border-sky-400 py-2'>

              Contact

            </li>
          </Link>
          <Link to="/about" className='whitespace-nowrap'>
            <li className='px-6 cursor-pointer border-2 hover:-mt-2 hover:bg-sky-300 hover:shadow-3xl border-sky-400 py-2'>

              About Us

            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar