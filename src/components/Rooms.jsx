import React from 'react'
import clasic_room from '../images/clasic_room.jpg'
import research_room from '../images/research_room.jpg'
import modern_room from '../images/modern_room.jpg'

const Rooms = () => {
  return (
        <div className='max-w-[1400px] h-[700px] bg-blue-100 mx-auto my-20 pt-16  px-4 grid lg:grid-cols-3 gap-4'>
            <div className='sm:h-[10px] md:h-[200px] lg:top-20 lg:col-span-1 col-span-2'>
                <h3 className='text-4xl font-bold'>Fine Interior Rooms</h3>
                <p className='t text-xl pt-5 pb-3'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eaque voluptate
                    voluptates est, nisi id voluptatibus eius, possimus accusamus obcaecati similique
                    recusandae earum sint quidem impedit rem, quis ducimus magni.
                </p>
            </div>
            <div className='grid grid-cols-2 col-span-2 gap-2 mb-10'>
                <img className='object-cover w-full h-full' src={clasic_room}/>
                <img className='object-cover w-full h-full row-span-2' src={modern_room}/>
                <img className='object-cover w-full h-full' src={research_room}/>
            </div>
        </div>
  )
}

export default Rooms