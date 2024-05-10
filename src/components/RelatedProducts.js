import React, { memo } from 'react';
import useFetch from '../hooks/useFetch';
import ProductSlider from './ProductSlider';

const RelatedProducts = ({categoryTitle}) => {
  const {data} = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`);
  return (<>
  <h2 className='text-xl uppercase px-4 py-6 pt-10 text-center lg:text-left'>related products</h2>
        <ProductSlider data={data} />
  </>);
};

export default memo(RelatedProducts);
