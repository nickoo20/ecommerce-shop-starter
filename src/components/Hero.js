import React from 'react';
// import WomanImg from '../img/woman_hero.png'
// import image from '../img/image.jpg'
import { Link } from 'react-router-dom' ;

const Hero = () => {
  return <section className='h-[70vh] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-center h-full'>
      <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase justify-end'>
            <div className='w-10 h-[2px] bg-red-500 mr-3 '>
            </div>
            New Collection
          </div>
          <h1 className='text-[40px] md:text-[70px] lg:text-[75px] italic leading-[1.1] font-light mb-4'>"Unleash Your <span className='text-pink-500'>Shopaholic</span> Instincts – "<br/>
          </h1>
            <Link to='/' className='ml-[30px] uppercase text-end underline text-red-500'> Explore our New Products 
            </Link>
      </div>
    </div>
  </section>
} ;

export default Hero ;
