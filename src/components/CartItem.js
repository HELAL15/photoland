import React, { memo, useContext } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Qty from './Qty';
import {CartContext} from '../context/CartContext';

const CartItem = ({item}) => {

  const {removeFromCart} = useContext(CartContext)


  return (<>
    <div className='grad p-4 rounded-lg flex justify-between items-center mb-4'>
      <Link to={`/product/${item.id}`} className='flex items-center'>
        <img src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`} alt={item.title} className='w-16 h-16 object-cover rounded-lg'/>
        <div className='ml-4'>
          <h3 className='text-lg font-bold'>{item.attributes.title.substring(0,10)}</h3>
          <p className='text-accent'>EGP {item.attributes.price} per price</p>
          <div className='mt-1'>
            <Qty item={item} />
            <p>
              total {item.attributes.price * item.amount} EGP
            </p>
          </div>
        </div>
      </Link>
      {/* <div className='flex items-center'>
        <button className='text-2xl'>+</button>
        <p className='mx-4'>{item.amount}</p>
        <button className='text-2xl'>-</button>
      </div> */}
      <button className='text-3xl transition-all duration-500 hover:text-accent' onClick={()=>removeFromCart( item.id)}><IoIosClose /></button>
    </div>
    
  </>);
};

export default memo(CartItem);
