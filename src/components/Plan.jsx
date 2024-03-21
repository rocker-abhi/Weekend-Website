import React from 'react'
import city from '../images/beautiful-italian-city.jpg'
import japanese_city from '../images/japanese-city.jpg'
import mountain from '../images/river-mountain.jpg'
import sunset from '../images/sunset-point.jpg'
import winter_mountain from '../images/winter-mountain.jpg'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-10 '>
        <div className='grid grid-cols-2 grid-rows-6 h-[100vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={city}></img>
            <img className='row-span-2 object-cover w-full h-full p-2' src={japanese_city}></img>
            <img className='row-span-2 object-cover w-full h-full p-2' src={mountain}></img>
            <img className='row-span-3 object-cover w-full h-full p-2' src={sunset}></img>
            <img className='row-span-2 object-cover w-full h-full p-2' src={winter_mountain}></img>
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-6xl font-bold md:text-6xl'>Plan Your Next Trip</h3>
            <p className='text-3xl py-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam incidunt
                 eius tempora! Nulla at ratione praesentium aut officia modi in distinctio,
                  iusto ea, totam excepturi, impedit porro facere perferendis saepe.</p>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi cumque modi
                 officiis veniam cupiditate ut laborum at nobis repellat non rerum ullam quo
                  voluptatibus dolore dolor, illo dignissimos. Cupiditate incidunt assumenda
                   eveniet explicabo laudantium obcaecati saepe debitis?</p>
            <div className='mt-2'>
                <button className=' border-black bg-black text-white p-4 hover:shadow-xl m-4 min-w-[150px]'>Learn More</button>
                <button className=' border-black bg-black text-white p-4 hover:shadow-xl m-4 min-w-[150px]'>Book Your Trip </button>
            </div>
        </div>
    </div>
  )
}

export default Plan