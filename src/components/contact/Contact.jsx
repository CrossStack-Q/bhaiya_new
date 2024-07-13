import React from 'react'
import ContactCard from './ContactCard'
import {ContactDetails} from "./ContactDetails"

function Contact() {
  return (
    <div className='flex'>
      <div className='flex-[0.5]'>
      {
        ContactDetails.map( (item)=>(
          <ContactCard imgURL={item.imgURL} title={item.title} optHead={item.optHead} subHead1={item.subHead1} subHead2={item.subHead2} buttonText={item.buttonText} />
        ) )
      }
      </div>
      <div className='flex-[0.5]'>
        Map
      </div>
      
    </div>
  )
}

export default Contact