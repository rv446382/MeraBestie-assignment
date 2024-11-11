import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewArrival = () => {
    const navigate = useNavigate();

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

    return (
        <section
            className="h-screen flex flex-col justify-center items-center p-6"
            style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1683121478285-285089a49816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdpZnR8ZW58MHx8MHx8fDA%3D')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="text-center mb-10">
                <h1 className="text-6xl mb-4 text-white">New Arrivals</h1>
                <p className="text-pink-500 text-2xl font-semibold">Choose Your Favourite Products!</p>
            </div>

            <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
                {images.slice(0, 4).map((image, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 rounded-lg shadow-md relative group transition duration-500 transform hover:translate-y-[-50px]"
                        style={{
                            backdropFilter: 'blur(5px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-56 h-56 object-cover rounded-md mb-4"
                        />
                        <button
                            onClick={() => navigate(image.link)}
                            className="bg-pink-400 text-white py-2 px-10 rounded-md mt-auto text-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                        >
                            {image.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrival;
