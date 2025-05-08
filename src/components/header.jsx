import React, { memo, useRef } from 'react'

function Header() {

  function btnMenu() {
    let btn = document.querySelector('.bx ')
    let modal = document.querySelector('.modal ')
    btn.classList.toggle('bx-x')
    if(!btn.classList.contains('bx-x')) {
      modal.style.right = '-800px'
    }else{
       modal.style.right = '0'
    }
  }
  return (
    <div className='relative overflow-hidden'>
      <nav className='w-full h-15 flex bg-[#606060] justify-between items-center p-1'>
        <div className='flex'>
          <div className='bg-[url(./assets/lakatsiya.png)] w-6 h-6 bg-contain bg-no-repeat'> </div>
          <select className='text-white bg-[#606060]' name='section'>
            <option value="maskva">Москва</option>
            <option value="uzbekistan">Uzbekistan</option>
          </select>
        </div>
        <p className='text-white'>Среднее время доставки*: 00:24:19</p>
      </nav>
      <div className='w-full h-20 flex justify-between items-center p-1 border-b'>
        <div className='flex gap-5 items-center' >
          <div className='bg-[url(./assets/pica.png)] w-10 h-10 bg-contain bg-no-repeat'></div>
          <h2 className='text-2xl'>Куда пицца</h2>
        </div>
        <i onClick={btnMenu} className='bx  bx-menu-alt-right duration-200 text-4xl'></i>
      </div>
      <div className='modal w-full h-max shadow-sm p-2 relative right-[-800px] duration-300 ease-in-out my-1'>
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

export default memo(Header)
