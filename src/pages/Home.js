import React, { memo } from 'react';

import LatestProducts from '../components/LatestProducts';
import Hero from '../components/Hero';
import Products from '../components/Products';

const Home = () => {


  return <>
    <Hero/>
    <LatestProducts/>
    <Products/>
  </>
};

export default memo(Home);
