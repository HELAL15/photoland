import React, { memo, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const {id} = useParams()
  const {data} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
  const [title , setTitle] = useState('')
  useEffect(()=>{
    if(data){
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    }
  })
  return (<>
    <div className='container mx-auto mt-40 lg:mt-4'>
      <div className='flex gap-x-0 lg:gap-x-[30px]'>
          <div>
            <CategoryNav/>
          </div>
          <div className='flex-1'>
          <h4 className='text-2xl font-bold text-accent mb-5 text-center lg:text-left'>{title} cameras</h4>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 '>
              {
                data?.map((product)=>{
                  return <Product key={product.id} product={product}/>
                })
              }
            </div>
          </div>
        </div>
    </div>
  </>);
};

export default memo(Products);
