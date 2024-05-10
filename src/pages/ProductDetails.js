import React, { memo, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/RelatedProducts';
import {CartContext} from '../context/CartContext';

const ProductDetails = () => {
  const {id} = useParams()
  const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  const categoryTitle = data?.[0].attributes.categories.data[0].attributes.title;
  const {addToCart} = useContext(CartContext)
  if(!data){
    return <div>Loading...</div>
  }


  return <>
    <div className='container mx-auto mt-40 lg:mt-4'>
        {
          data?.map(product=>
          <div className='flex flex-col lg:flex-row gap-[30px]' key={product.id}>
            <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg grid place-items-center'>
              <img className='w-full max-w-[65%] h-full object-contain' src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} alt={product.attributes.title}/>
            </div>
            <div className='flex-1 flex flex-col gap-[1rem] bg-primary p-12 rounded-lg justify-center'>
              <h2 className='text-accent text-3xl font-bold uppercase mb-3'>{product.attributes.categories.data[0].attributes.title} camera</h2>
              <p className='text-lg h2 font-bold mb-3'>
                {product.attributes.title}
              </p>
              <p className=' mb-3'>
                {product.attributes.description}
              </p>
              <p className='text-accent font-bold'>
                {product.attributes.price} EGP
              </p>
              <button className='btn btn-accent' onClick={()=>addToCart(product , product.id)}>add to cart</button>
            </div>
          </div>)
        }
        <div className=''>
          <RelatedProducts categoryTitle={categoryTitle}/>
        </div>
    </div>
  </>;
};

export default memo(ProductDetails);
