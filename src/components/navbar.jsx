import React from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handle_nav = () => {
        setNav(!nav)
        if(!nav){
                // fixing the scrool 
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'scroll'
        }
    }

  return (
    <div className='absolute w-full flex justify-between items-center p-4'>
        <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
        <HiMenuAlt3 onClick={handle_nav} size={45} className=' text-white z-20' />
        <div className={ nav ? 'ease-in duration-1000 fixed text-gray-300 w-full h-screen left-0 top-0 bg-black/70 px-4 py-7 flex-col z-10':
        'absolute top-0 h-screen left-[-100%] duration-500 z-10'}>
            <ul className='flex flex-col w-full h-full justify-center items-center'>
                <li className='font-bold text-3xl p-5'>Home</li>
                <li className='font-bold text-3xl p-5'>Destination</li>
                <li className='font-bold text-3xl p-5'>reservation</li>
                <li className='font-bold text-3xl p-5'>Amenities</li>
                <li className='font-bold text-3xl p-5'>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar