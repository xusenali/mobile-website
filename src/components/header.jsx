import React, { memo, useRef } from 'react'
import Foter from './Foter'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  function btnMenu() {
    let btn = document.querySelector('.bx')
    
    btn.classList.toggle('bx-x')
    if (!btn.classList.contains('bx-x')) {
      navigate('/')
    } else {
      navigate('menu')
    }
  }

  return (
    <div >
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
      
    </div>
  )
}

export default memo(Header)
