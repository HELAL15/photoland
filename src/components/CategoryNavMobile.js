import React, { memo, useCallback, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import useFetch from '../hooks/useFetch';
import { Link, NavLink, useLocation } from 'react-router-dom';

const CategoryNavMobile = ({catNavMobile ,setCatNavMobile}) => {
  const {data} = useFetch('/categories');
  const location = useLocation()
  useEffect(()=>{
    const handleClose = ()=>{
      setCatNavMobile(false)
    }
    handleClose()
  },[location])
  return (<>
    <div className='bg-primary w-full md:w-[50%] h-full p-8'>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-xl text-accent '>pick your category</h3>
        <div className='text-4xl cursor-pointer ' onClick={useCallback(()=>setCatNavMobile(false),[catNavMobile])} ><IoIosClose /></div>
      </div>
      <div className='flex flex-col gap-y-8 mt-8'>
        {
          data?.map((cat)=>{
            return <NavLink to={`/products/${cat.id}`} end className='cursor-pointer uppercase font-medium' key={cat.id}>{cat.attributes.title}</NavLink>
          })
        }
    </div>
    </div>
  </>);
};

export default memo(CategoryNavMobile);
