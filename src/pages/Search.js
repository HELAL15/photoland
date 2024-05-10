import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Product from '../components/Product';
import CategoryNav from '../components/CategoryNav';

const Search = () => {

  const location = useLocation()
  const searchParam = new URLSearchParams(location.search)
  const query = searchParam.get('query')

  const {data} = useFetch(`/products?populate=*&filters[title][$contains]=${query}`);

  return (<>
    <div className='container mx-auto'>
      <div className='flex gap-x-0 lg:gap-x-[30px]'>
        <div>
          <CategoryNav/>
        </div>
        <div className='flex-1'>
        <p className='mb-5 text-center lg:text-left'>
          {data?.length > 0 ? <span className='text-accent'>{data.length}</span> : null} 
          {data?.length > 0 && ` results for ${query}`}
          {data?.length === 0 ? <span className='text-accent'>no</span> : null} 
          {data?.length === 0 && ` results found for ${query}`}
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-40 xl:mt-0'>
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

export default memo(Search);
