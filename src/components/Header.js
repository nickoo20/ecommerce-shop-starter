import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return <header className={`${isActive ? 'bg-[#F8F6F4] py-4 shadow-md' : 'bg-none py-6'}
  fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to='/'>
        <div className='flex items-center gap-2'>
          <img className='w-[40px]' src={Logo} alt='' />
          {isActive && (
            <div className='tracking-wider'>
              <span className='text-3xl text-yellow-900'>S</span>
              <span className='text-yellow-800'>h</span>
              <span className='text-yellow-700'>o</span>
              <span className='text-yellow-600'>p</span>
              <span className='text-blue-500'>S</span>
              <span className='text-pink-500'>a</span>
              <span className='text-gray-400'>v</span>
              <span className='text-orange-600'>v</span>
              <span className='text-purple-700'>y</span>
            </div>
          )}
        </div>
      </Link>
      <div className='text-sm font-medium text-[#FF6363]'> "Your Ultimate E-commerce Destination"</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center' >{itemAmount}</div>
      </div>
    </div>
  </header>
} ;

export default Header ;
