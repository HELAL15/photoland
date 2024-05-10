import React, { memo } from 'react';
import useFetch from '../hooks/useFetch';
import { Link, NavLink } from 'react-router-dom';

const CategoryNav = () => {
  const {data} = useFetch('/categories');
  return <>
    <aside className='hidden lg:flex'>
      <div className='bg-primary flex flex-col w-[280px] h-[500px] rounded-[8px] overflow-hidden'>
        <h3 className='p-4 bg-accent text-primary uppercase font-semibold grid place-items-center'>browse category</h3>
        <div className='flex flex-col gap-y-6 p-6'>
          {
            data?.map((cat)=>{
              return <NavLink className='cursor-pointer uppercase' end to={`/products/${cat.id}`} key={cat.id}>{cat.attributes.title}</NavLink>
            })
          }
        </div>
      </div>
    </aside>
  </>;
};

export default memo(CategoryNav);
