import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'; // Assuming RxDotFilled is from react-icons/ri
import Pizza from '../images/pizza.jpg';
import Pastry from '../images/pastry.jpg';
import Kbob from '../images/kbob.jpg';

const ImageSlider = () => {
    const slide = [
        {
            url: Pizza,
            title: "Pizza"
        },
        {
            url: Pastry,
            title: "Pastry"
        },
        {
            url: Kbob,
            title: "Kabab"
        }
    ];

    const [current_index, set_current_index] = useState(0);

    const go_to_slide = (index) => {
        set_current_index(index);
    };

    const prev_slide = () => {
        const newIndex = (current_index === 0) ? 2 : current_index - 1;
        set_current_index(newIndex);
    };

    const next_slide = () => {
        const newIndex = (current_index === 2) ? 0 : current_index + 1;
        set_current_index(newIndex);
    };

    return (
        <div className='max-w-[1400px] h-[580px] m-auto py-16 px-4 relative group'>
            <div className='h-full w-full'>
                <img className="h-full w-full object-cover bg-center duration-500 rounded-3xl" src={slide[current_index].url} alt={slide[current_index].title} />
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
            group-hover:bg-black/20 text-white cursor-pointer' onClick={prev_slide}>
                <BsChevronCompactLeft size={30} />
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
            group-hover:bg-black/20 text-white cursor-pointer' onClick={next_slide}>
                <BsChevronCompactRight size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slide.map((item, index) => (
                    <RxDotFilled key={index} style={{ marginRight: '5px', fontSize: '20px', color: (current_index === index) ? '#000' : '#ccc' }} onClick={() => go_to_slide(index)} />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
