import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewArrival = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: 'https://plus.unsplash.com/premium_photo-1663840819990-3af4646daf63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdCUyMGNhcmRzfGVufDB8fDB8fHww',
            alt: 'Sticky Notes',
            buttonText: 'Sticky Notes',
            link: '/sticky-notes',
        },
        {
            src: 'https://plus.unsplash.com/premium_photo-1671730784473-7738e6742bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lmdCUyMGNhcmRzfGVufDB8fDB8fHww',
            alt: 'Planner',
            buttonText: 'Planner',
            link: '/planners',
        },
        {
            src: 'https://plus.unsplash.com/premium_photo-1671730782089-54bcfbeeae85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGdpZnQlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D',
            alt: 'NotePad',
            buttonText: 'NotePad',
            link: '/notepad',
        },
        {
            src: 'https://media.istockphoto.com/id/871870942/photo/couple-on-a-date.jpg?s=612x612&w=0&k=20&c=9sjXQrl_spcB8e6BB7BsJc3knWleq0WnM9j_DQbOOB8=',
            alt: 'Gift Cards',
            buttonText: 'More',
            link: '/more',
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="h-screen flex flex-col justify-center items-center p-6">
            <div className="text-center mb-10">
                <h1 className="text-6xl mb-4 text-black">Sticky Notes</h1>
                <p className="text-pink-500 text-2xl font-semibold">Choose Your Favourite Notes!</p>
            </div>

            <div className="relative w-full max-w-6xl flex items-center">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 text-4xl text-pink-500 hover:text-pink-700 focus:outline-none"
                >
                    &#10094;
                </button>

                {/* Slider Content */}
                <div className="w-full flex justify-center">
                    <div
                        className="flex flex-col items-center p-4 rounded-lg shadow-md transition-transform"
                        style={{
                            backdropFilter: 'blur(5px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            className="w-56 h-56 object-cover rounded-md mb-4"
                        />
                        <button
                            onClick={() => navigate(images[currentIndex].link)}
                            className="bg-pink-400 text-white py-2 px-10 rounded-md text-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            {images[currentIndex].buttonText}
                        </button>
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 text-4xl text-pink-500 hover:text-pink-700 focus:outline-none"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default NewArrival;
