import React, { memo, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const AllProducts = () => {
  const {data} = useFetch(`/products?populate=*`);

  return (<>
    <div className='container mx-auto mt-40 lg:mt-4'>
      <div className='flex gap-x-0 lg:gap-x-[30px]'>
          <div>
            <CategoryNav/>
          </div>
          <div className='flex-1'>
          <h4 className='text-2xl font-bold text-accent mb-5 text-center lg:text-left'>all cameras</h4>
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

export default memo(AllProducts);
