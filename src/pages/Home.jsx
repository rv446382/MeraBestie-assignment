import React from 'react';
import { Link } from 'react-router-dom';
import NewArrivals from './Arrivals/NewArrivals';
import OurBestSellers from './Arrivals/OurBestSellers';
import GiftCardSlider from './slider/GiftCardSlider';
import Footer from './footer/Footer';

const HomePage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://as2.ftcdn.net/v2/jpg/09/29/21/49/1000_F_929214998_pzQGVHpzDjbu45PrUOlWvpgoTmFduO5a.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content on top of the overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
        {/* Button */}
        <Link to="/shop">
          <button className="bg-pink-500 text-white px-6 py-3 shadow-lg text-lg hover:bg-pink-300 transition duration-300">
            Explore Now
          </button>
        </Link>

        {/* New Arrivals Section */}
      </div>

      <h1 className="mt-10 text-5xl font-thin italic text-center text-pink-400 bg-gradient-to-r from-pink-500 to-pink-500 bg-clip-text text-transparent animate-character-move">
        Let's Enjoy New Arrivals
      </h1>


      <div className='mt-10'>
        <NewArrivals />
      </div>

      <div className="mt-10">
        <OurBestSellers />
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-transparent border-2 border-pink-300 text-pink-300 py-2 px-20 rounded-md hover:bg-pink-300 hover:text-white transition duration-300">
          Load More
        </button>
      </div>
      <GiftCardSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
