import React, { memo } from 'react'

function Home() {
  return (
    <div className='w-full h-max  p-1 my-2'>
      <div className='flex p-1'>
        <div className='w-full h-[320px] bg-[#C4C4C4]  rounded-2xl relative'>
          <h1 className='text-2xl absolute bottom-3 left-3'>3 средние пиццы от 999 рублей</h1>
        </div>
      </div>
      <div className='w-full h-max rounded-2xl bg-[#EFEFEF] text-center p-5 mt-3'>
        <h1 className='text-2xl'>Проверить адрес доставки</h1>
        <input className='bg-white rounded p-2 w- mt-3' type="text" placeholder='Адрес' />
      </div>
    </div>
    
  )
}

export default memo(Home) 
