import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"

import dataSwiper from "../json/dataSwiper"
export function SwiperInicio() {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        "delay": 6000,
        "disableOnInteraction": false
      }}
      navigation
    >
      {dataSwiper.map(({ title, subtitle, image }, i) => (
        <SwiperSlide key={i}>
          <div className='relative w-full mx-auto xl:w-5/6 z-10'>
            <div className='absolute flex-col hidden p-5 bg-white rounded-md shadow-xl md:flex left-16 md:w-5/12 md:top-10 lg:w-4/12 xl:top-16 xl:w-2/6'>
              <h1 className='text-xl lg:text-2xl xl:text-4xl font-bold text-gray-700 tracking-thin font-suisse'>{title}</h1>
              <p className='mt-2 text-md lg:text-lg leading-2'>{subtitle}</p>
            </div>
            <img src={image} className='w-full' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
