import React, { memo } from 'react';
import {Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination} from 'swiper';
import Product from './Product';
import '../slider.css'
 
import cameraImg from '../img/camera.png'

const sliderData = [
  {
    img : cameraImg,
    preTitle : 'special offer',
    titlePart1 : 'save 20%',
    titlePart2 : 'on your',
    titlePart3 : 'first order',
    btnText: 'shop now'
  },
  {
    img : cameraImg,
    preTitle : 'special offer',
    titlePart1 : 'save 20%',
    titlePart2 : 'on your',
    titlePart3 : 'first order',
    btnText: 'shop now'
  },
  {
    img : cameraImg,
    preTitle : 'special offer',
    titlePart1 : 'save 20%',
    titlePart2 : 'on your',
    titlePart3 : 'first order',
    btnText: 'shop now'
  }
]




const MainSlider = ({data}) => {
  return<>
    <Swiper modules={[Pagination]}
   loop={true}
   autoplay={true}
     pagination={{
      clickable: true
     }}
     className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat lg:max-w-none drop-shadow-2xl rounded-[8px] overflow-hidden relative '
     >
  {sliderData?.map((slide , index) => {
    return <SwiperSlide key={index}>
      <div className='flex flex-col xl:flex-row h-full p-[20px] md:p-[50px]'>
        <div className='w-full lg:flex-1'>
          <h4 className='uppercase text-center lg:text-left mb-1'>{slide.preTitle}</h4>
          <div className='text-3xl md:justify-center md:flex md:gap-1 lg:flex-col md:text-2xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
            <p>{slide.titlePart1}</p>
            <p>{slide.titlePart2}</p>
            <p>{slide.titlePart3}</p>
          </div>
          <button className='btn btn-accent mx-auto lg:mx-0'>shop now</button>
        </div>
        <div className=' lg:max-w-[320px]'><img className=' w-full h-full object-contain xl:absolute xl:-right-32 xl:-bottom-12' src={slide.img} alt={slide.preTitle}/></div>
      </div>
    </SwiperSlide>
  } )}
  </Swiper>
  </>

};

export default memo(MainSlider);
