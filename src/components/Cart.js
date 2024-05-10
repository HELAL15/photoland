import React, { memo, useContext, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import { IoArrowForward, IoCartOutline } from "react-icons/io5";
import {CartContext} from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const {setIsOpen , cart , total , itemAmount , clearCart} = useContext(CartContext)
  const location = useLocation()
  useEffect(()=>{
    setIsOpen(false)
  },[location])
  return (<>
    <div className='w-full h-full px-3 lg:px-6 py-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>Cart {itemAmount}</h2>
        <button className='text-4xl' onClick={()=>setIsOpen(false)}><IoIosClose /></button>
      </div>
      <div className='h-[75%] overflow-auto'>
        {
          cart.length > 0 ? cart.map((item)=>{
            return <CartItem key={item.id} item={item}/>
          }) : <div className='h-full flex items-center justify-center flex-col gap-3'>
                  <p className='text-center text-accent text-2xl'>No items in your cart</p>
                  <div className='text-center text-accent text-4xl'>
                    <IoCartOutline />
                  </div>
                </div>
        }
      </div>
      <div className='flex justify-between items-center mt-6'>
        <h3 className='text-xl font-bold'>Total</h3>
        <h3 className='text-xl font-bold'>EGP {total}</h3>
      </div>
      { cart.length > 0 ?
        <div className='flex justify-center gap-5 items-center mt-6 flex-wrap'>
        <button className='text-lg  text-accent btn outline outline-accent hover:outline-accent-hover hover:bg-accent-hover transition-all duration-500 hover:text-primary ' onClick={clearCart}>clear cart</button>
        <Link to='' className='text-lg btn btn-accent'>checkout <IoArrowForward className='text-2xl mx-3'/> </Link>
      </div> : null
      }
    </div>
  </>);
};

export default memo(Cart);
