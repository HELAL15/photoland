import React, { memo } from 'react';
import {Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination , Navigation} from 'swiper';
import Product from './Product';
import '../slider.css'
 



const ProductSlider = ({data}) => {
  return<>
    <div className='mx-auto container'>
    <Swiper modules={[Pagination , Navigation]}
   loop={true}
   autoplay={true}
    navigation={true}
     pagination={{
      clickable: true
     }}
     breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:30
        },
        768:{
          slidesPerView:2,
          spaceBetween:30
        },
        1024:{
          slidesPerView:3,
          spaceBetween:30
        },
        1440:{
          slidesPerView:5,
          spaceBetween:30
        }
      
     }}
     className='productSlider'
     >
  {data?.map((product) => {
    return <SwiperSlide key={product.id}>
      <Product product={product}/>
    </SwiperSlide>
  } )}
  </Swiper>
    </div>
  </>

};

export default memo(ProductSlider);
