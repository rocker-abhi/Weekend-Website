import React from 'react'
import image from '../images/backgrond-hills.jpg'

const Hero = () => {
  return (
    <div className='w-full h-full'>
        <img src={image} className='top-0 left-0 w-screen h-screen'/>
        <div className='bg-white/20 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p className='m-2'>All Included</p>
                <h1 className='font-bold text-5xl drop-shadow-2xl'>Private beaches & get away </h1>
                <p className='m-3 max-w-[50%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veritatis, ex? Tempora pariatur eaque, voluptas tenetur
                     quaerat inventore sed voluptates labore.</p>
                
                <button className='ml-[50%] px-10 py-4'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero