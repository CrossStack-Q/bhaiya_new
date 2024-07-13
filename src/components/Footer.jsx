import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex p-12 bg-gray-800 text-zinc-200'>
      <div className='flex-[0.3]'>Map</div>
      <div className='flex-[0.7] flex justify-around'>
        <div className='flex-col space-y-2 hidden md:flex'>
          <span className='text-white flex items-center space-x-2'>
            <img className='w-5 h-5 -ml-7' src="https://unitechlpg.com/images/hover.png" alt="" />
            <span>
              QUICK LINKS
            </span>
          </span>
          <span>
            <Link to='/home' >
              Home
            </Link>
          </span>
          <span>
            <Link to='/products' >
              Products
            </Link>
          </span>
          <span>
            <Link to="/enquiry">
              Enquiry
            </Link>
          </span>
          <span>
            <Link to="/contact">
              Contact
            </Link>
          </span>
          <span>
            <Link to="/about" className='whitespace-nowrap'>
              About Us
            </Link>
          </span>
        </div>
        <div className='-mt-2'>
          <div className='flex items-center space-x-2'>
            <img className='w-5 h-5 -ml-7' src="	https://unitechlpg.com/images/marker.png" alt="" />
            <p className='text-white py-2'>GET IN TOUCH</p>
          </div>

          <span>
            F 41, UPSIDC INDUSTRIAL AREA, EXT 1, <br />  KOTWAN, Kosi Kalan <br /> Uttar
            Pradesh 281403
          </span>
        </div>
        <div className='flex flex-col space-y-2'>
          <p className='text-white'>CONTACT US</p>
          <span>Call: <br /> &nbsp; +919811372106<br /> &nbsp; +919873726106</span>
          <span>Email: info@unitechlpg.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer