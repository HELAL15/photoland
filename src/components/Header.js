import React, { memo, useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png'
import {SlBag} from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi';

//components 
import SearchForm from '../components/SearchForm'
import CategoryNavMobile from '../components/CategoryNavMobile';
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [catNavMobile , setCatNavMobile] = useState(false)
  const {isOpen , setIsOpen , itemAmount} = useContext(CartContext)
  return <>
    <header className='bg-primary py-6 w-full z-40 fixed top-0 lg:relative xl:mb-[30px]'>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-4 justify-between lg:items-center mb-4 lg:mb-0'>
          <div className='text-3xl xl:hidden cursor-pointer' onClick={useCallback(()=>setCatNavMobile(!catNavMobile),[catNavMobile])}>
            <FiMenu/>
          </div>
          <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-300`}>
            <CategoryNavMobile catNavMobile={catNavMobile} setCatNavMobile={setCatNavMobile}/>
          </div>
          <Link to=''>
            <img src={logo} alt="Logo"/>
          </Link>
          {/* desktop only  */}
        <div className='hidden w-full xl:flex xl:max-w-[734px]'>
          <SearchForm/>
        </div>
        {/* phone and cart  */}
        <div className='flex flex-row items-center gap-[1rem]'>
          <Link className='hidden lg:flex' to='tel:+201222810589'>need help? +201222810589</Link>
          <div className='relative cursor-pointer' onClick={useCallback(()=>setIsOpen(!isOpen) , [isOpen])}>
          <SlBag className='text-2xl'/>
          <span className='tracking-[-0.1em] absolute bottom-0 -right-2 text-sm w-[15px] h-[15px] flex justify-center items-center bg-accent rounded-full text-primary font-bold'>{itemAmount}</span>
          </div>
        </div>
        <div className={` ${isOpen ? 'right-0' : '-right-full'}   bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
          <Cart/>
        </div>
        </div>
        {/* mobile only  */}
        <div className='xl:hidden mt-5'>
          <SearchForm/>
        </div>
      </div>
    </header>
  </>;
};

export default memo(Header);
