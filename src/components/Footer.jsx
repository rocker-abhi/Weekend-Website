import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-34 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
            <div>
                <h6 className='font-bold uppercase pt-3'>Solutions</h6>
                <ul>
                    <li className=''>Travels</li>
                    <li className=''>Bookings</li>
                    <li className=''>Flights</li>
                    <li className=''>Cruises</li>
                    <li className=''>Ground</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-3'>Support</h6>
                <ul>
                    <li className=''>Pricing</li>
                    <li className=''>Documentation</li>
                    <li className=''>Tours</li>
                    <li className=''>Refunds</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-3'>Company</h6>
                <ul>
                    <li className=''>About</li>
                    <li className=''>Blogs</li>
                    <li className=''>Jobs</li>
                    <li className=''>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-3'>Legal</h6>
                <ul>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Policies</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase py-4'>Subscribe to our news letters</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo delectus, nihil vero, aspernatur modi veniam 
                    ipsum beatae quo facere earum neque at numquam ipsam laboriosam reprehenderit, perspiciatis accusamus maxime!
                     Numquam.</p>
                <form className='flex flex-col sm:flex-row mt-5'>
                    <input className='w-full p-3 mr-4 rounded-xl mb-4' type='email' placeholder='enter email'/>
                    <button className='p-2 mb-4 uppercase ml-4 min-w-[150px] bg-white/90 text-black font-bold'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center '>
            <p>2022 Experiences, LLC. All rights reserved.</p>
            <div className='d flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook size={30}/>
                <FaInstagram size={30}/>
                <FaTwitter size={30}/>
                <FaPinterest size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer