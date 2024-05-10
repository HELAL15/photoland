import React, { memo, useEffect, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const SearchForm = () => {

  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [isAnimate , setIsAnimate] = useState(false)

  const handleSearch = (e) =>{
    e.preventDefault()
    if(search.length > 0){
      navigate(`/search?query=${search}`)
      setSearch('')
    }else{
      setIsAnimate(true)
      console.log('please search for a product')
    }
    console.log(search);
  }

useEffect(()=>{
  const timeOut = setTimeout(()=>{
    setIsAnimate(false)
  },1000)
  return ()=> clearTimeout(timeOut)
})

  const handleChange = (e) => {
      setSearch(e.target.value)
    };


  return (<>
  <form className={` ${isAnimate? 'animate-shake' : 'animate-none'} relative w-full`} onSubmit={handleSearch}>
    <div className='flex flex-row items-center  overflow-hidden'>
      <input type="text" placeholder='Search for a product...' className='input pr-[6.5rem]' value={search} onChange={handleChange}/>
      <button type='submit' className='btn btn-accent rounded-tl-none rounded-bl-none absolute top-0 right-0'>
        <FiSearch className='text-xl'/>
      </button>
    </div>
  </form>

  </>);
};

export default memo(SearchForm);
