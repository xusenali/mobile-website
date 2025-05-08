import React, { memo } from 'react'

function Foter() {
  return (
    <div className='flex flex-col gap-5'>
      <ul className='flex gap-5 items-center'>
        <i className='bx bx-phone text-2xl'></i>
        <li>+7 (926) 223-10-11</li>
      </ul>
      <ul className='flex gap-5 items-center' >
        <i className='bx bx-location-plus text-2xl' ></i>
        <li>Москва, ул. Юных Ленинцев, д.99</li>
      </ul>
      <ul className='flex items-center gap-6'>
        <ul className=' flex items-center gap-5'>
          <i className='bx bxl-facebook-circle text-2xl' ></i>
          <li>Facebook</li>
        </ul>
        <ul className=' flex items-center gap-5' >
        <i className='bx bxl-instagram-alt text-2xl' ></i>
          <li>Instagram</li>
        </ul>
      </ul>
    </div>
  )
}

export default memo(Foter)
