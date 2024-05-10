import React, { memo } from 'react';
//components
import CategoryNav from './CategoryNav';
import MainSlider from './MainSlider';
//images
import promoImg1 from '../img/promo_img1.png'
import promoImg2 from '../img/promo_img2.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  return <>
    <section className='mb-[30px] pt-36 lg:pt-0 '>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] mt-8 xl:mt-0'>
          <div className='hidden xl:flex'>
            <CategoryNav/>
          </div>
          <div className='w-full lg:max-w-lg xl:max-w-[734px] mx-auto'>
            <MainSlider/>
          </div>
          <div className='flex flex-col gap-y-[30px] w-full  h-[500px]'>
            {/* promo 1 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] relative overflow-hidden p-6'>
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <p className='text-[20px] uppercase font-medium leading-tight mb-4'>save 35% all dslr cameras</p>
                <Link to="" className='uppercase text-accent'>shop now</Link>
              </div>
              <div className='img absolute z-20 -top-0 -right-4'>
                <img className='' src={promoImg1} alt='promotion img 1'/>
              </div>
            </div>
            {/* promo 2 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] relative overflow-hidden p-6'>
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <p className='text-[20px] uppercase font-medium leading-tight mb-4'>save 25% mirrorless cameras</p>
                <Link to="" className='uppercase text-accent'>shop now</Link>
              </div>
              <div className='img absolute z-20 -top-0 -right-4'>
                <img className='' src={promoImg2} alt='promotion img 1'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default memo(Hero);
