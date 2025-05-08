import React, { memo } from 'react'
import { products } from '../hooks/products'
console.log(products);


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
      <div className='w-full h-max my-5 flex flex-col  gap-10'>
        <h1 className='text-2xl'>Пицца</h1>
        {
          products.map(item => {
            return (
              <div key={item.id} className='w-full h-[120px] flex gap-5'>
                  <img src={item.image} alt=""  className='w-30 h-full rounded-4xl'/>
                  <div className='flex flex-col gap-1'>
                    <h1 className='font-medium text-[20px]'>{item.name}</h1>
                    <p className=' line-clamp-2 text-[15px]'>{item.description}</p>
                    <div className=' w-20 h-10 rounded bg-[#E6E6E6] flex justify-center items-center'>от {item.price} p</div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default memo(Home) 
