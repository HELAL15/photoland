import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  return <>
  <Link to={`/product/${product.id}`}>
    <div className='grad group w-full rounded-[8px] overflow-hidden relative'>
          {/* is new ?  */}
      {product.attributes.isNew === true &&<span className='uppercase bg-accent rounded-full absolute top-4 right-2 text-[12px] text-primary font-extrabold px-3 z-10'>
        new
      </span>}
      {/* product image  */}
      <div className='w-full h-[200px] grid place-items-center'>
        <img
          src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
          alt={product.attributes.title}
          className='w-[160px] h-[160px] transition-all duration-[.3s] group-hover:scale-110'/>
      </div>
      {/* product category */}
      <div className='p-4 px-6'>
        <h5 className='text-md capitalize text-accent mb-1'>
          {product.attributes.categories.data[0].attributes.title.substring(0,35)}
        </h5>
        {/* product title  */}
        <p className='text-sm font-bold mb-1'>
          {product.attributes.title.substring(0,35)}...
        </p>
        {/* product price  */}
        <p className='text-accent font-bold'>
          {product.attributes.price} EGP
        </p>
      </div>
    </div>
  </Link>
  </>
};

export default memo(Product);
