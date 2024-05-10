import React, { memo } from 'react';
import logo from '../img/logo.png'
import LatestProducts from '../components/LatestProducts';


const About = () => {
  return (
    <section>
      <div className="container mx-auto py-10">
        <div className='grid gap-6 place-items-center grid-cols-1 md:grid-cols-2'>
          <div>
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna ultricies, commodo libero vitae, aliquam metus. Integer dignissim tristique eros, id efficitur justo consectetur vel.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna ultricies, commodo libero vitae, aliquam metus. Integer dignissim tristique eros, id efficitur justo consectetur vel.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna ultricies, commodo libero vitae, aliquam metus. Integer dignissim tristique eros, id efficitur justo consectetur vel.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna ultricies, commodo libero vitae, aliquam metus. Integer dignissim tristique eros, id efficitur justo consectetur vel.
            </p>
          </div>
        </div>
        <LatestProducts/>
    </div>
    </section>
  );
};

export default memo(About);