import React, { memo } from 'react'
import Foter from '../components/Foter'

function Menu() {
  return (
    <div>
      <div className='modal w-full h-max shadow-sm p-2 absulote top-0 right-[-800px] duration-300 ease-in-out my-1 '>
        <div className='flex gap-7 items-center w-full h-15 border-b'>
        <i className='bx bx-user text-3xl' ></i>
        <p>Войти в аккаунт</p>
        </div>
        <ul className='flex flex-col gap-5 my-3'>
          <li>Акции</li>
          <li>О компании</li>
          <li>Пользовательское соглашение</li>
          <li>Условия гарантии</li>
          <li>Ресторан</li>
          <li>Контакты</li>
          <li>Поддержка</li>
          <li>Отследить заказ</li>
        </ul>
        
      </div>
    </div>
  )
}

export default memo(Menu) 
