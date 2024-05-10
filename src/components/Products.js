import React, { memo } from 'react'
import useFetch from '../hooks/useFetch';
import Product from './Product';
import { Link } from 'react-router-dom';

const Products = () => {
  const {data} = useFetch('/products?populate=*')
  const slicedData = data?.slice(0,10)
  console.log(slicedData);
  return (
    <section>
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center xl:text-left'>products</h2>
        <div className='grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {
            slicedData?.map(product=><Product key={product.id} product={product} />)
          }
        </div>
        <Link to='/allProducts' className='btn btn-accent mx-auto mt-5 w-fit'>see more</Link>
      </div>
    </section>
  )
}

export default memo(Products)
