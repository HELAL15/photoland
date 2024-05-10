import React, { memo } from 'react';
import ProductSlider from './ProductSlider';
import useFetch from '../hooks/useFetch';

const LatestProducts = () => {
  //get data
  const {data} = useFetch('/products?populate=*&filters[isNew]=true');
  return <>
     <div className='mb-16'>
  <div className='container mx-auto'>
    <h3 className='h2 mb-6 text-center xl:text-left'>latest products</h3>
  </div>
    <ProductSlider data={data}/>
  </div>
  </>;
};

export default memo(LatestProducts);
