import React, { memo, useState } from 'react';
import {FaYoutube , FaInstagram , FaTwitter , FaFacebook} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.png'

const Footer = () => {

  const [email , setEmail] = useState('')

  const handleChange = (e) =>{
    const {value} = e.target
    setEmail(value)
    console.log(value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(email);
  }





  return (<>
    <footer className='pt-16 bg-primary mt-10'>
      <div className='container mx-auto'>
        
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 place-items-center py-5 gap-10 md:gap-5'>

        <Link className='text-center md:text-left' to=''>
        <img className='m-auto md:m-0' src={logo} alt="Logo"/>
        <p className='my-4 text-lg text-gray-400'>
          in photoland where you can find your professional cameras
        </p>
        </Link>

          <div>
            <div className='text-center md:text-left'>
              <h2 className='text-lg lg:text-xl text-accent uppercase'>subscribe to our newsletter</h2>
              <p className='text-gray-400 my-2'>
                Get the latest updates on new products and upcoming sales
              </p>
            </div>

            <form className={`relative w-full`} onSubmit={handleSubmit}>
              <div className='flex flex-row items-center  overflow-hidden'>
                <input type="text" placeholder='Enter your email address' name='email' className='input pr-[7.5rem]' value={email} onChange={handleChange}/>
                <button type='submit' className='btn btn-accent rounded-tl-none rounded-bl-none absolute top-0 right-0 px-5'>
                  subscribe
                </button>
              </div>
            </form>

          </div>

          <ul className='columns-2 gap-3 text-lg '>
            <li>
              <NavLink end to='/about' className='duration-200 transition-all'>about</NavLink>
            </li>
            <li>
              <NavLink end to='/terms' className='duration-200 transition-all'>terms</NavLink>
            </li>
            <li>
              <NavLink end to='/policy' className='duration-200 transition-all'>policy</NavLink>
            </li>
            <li>
              <NavLink end to='/ReturnsPolicy' className='duration-200 transition-all'>returns policy</NavLink>
            </li>
            <li>
              <NavLink end to='/ddd' className='duration-200 transition-all'>track your order</NavLink>
            </li>
            <li>
              <NavLink end to='/www' className='duration-200 transition-all'>shipping & delivery</NavLink>
            </li>
          </ul>

          <div className='flex gap-4 font-bold text-3xl'>
            <Link to='' className='hover:text-accent duration-200 transition-all'>
              <FaYoutube />
            </Link>
            <Link to='' className='hover:text-accent duration-200 transition-all'>
              <FaInstagram />
            </Link>
            <Link to='' className='hover:text-accent duration-200 transition-all'>
              <FaTwitter />
            </Link>
            <Link to='' className='hover:text-accent duration-200 transition-all'>
              <FaFacebook />
            </Link>
          </div>
        </div>

      </div>


      <div className='container mx-auto'>
        <p className='text-center text-sm py-5 border-t border-t-white/10'>
          &copy; 2024 e-commerce <span className='text-accent'>HELAL</span> all rights reserved
        </p>
      </div>


    </footer>
  </>);
};

export default memo(Footer);
