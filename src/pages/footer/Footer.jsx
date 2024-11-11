import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full bg-white py-8">
            <div className="flex justify-between space-x-0 px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 w-full">
                    {/* First Section: Logo */}
                    <div className="bg-pink-200 p-16 text-center backdrop-blur-lg bg-opacity-50 border-transparent">
                        <img
                            src="https://static.wixstatic.com/media/a613c3_83c07f8ed1dd49b9b30eb82b87395db9~mv2.png/v1/fill/w_161,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/the%20purple%20star%20(1)_edited.png"
                            alt="Logo"
                            className="w-64 mx-auto"
                        />
                    </div>

                    {/* Second Section: Shop Links */}
                    <div className="bg-pink-200 p-16 text-center backdrop-blur-lg bg-opacity-50 border-transparent">
                        <p className="text-xl font-semibold text-black mb-4">Shop</p>
                        <ul className="text-gray-700 space-y-2">
                            <li>Shop All</li>
                            <li>Sticky Notes</li>
                            <li>Notepads</li>
                            <li>Planners</li>
                        </ul>
                    </div>

                    {/* Third Section: Policy Links */}
                    <div className="bg-pink-200 p-16 text-center backdrop-blur-lg bg-opacity-50 border-transparent">
                        <p className="text-xl font-semibold text-black mb-4">Policy</p>
                        <ul className="text-gray-700 space-y-2">
                            <li>Shipping & Returns</li>
                            <li>Store Policy</li>
                            <li>Payment Methods</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Fourth Section: Contact Info */}
                    <div className="bg-pink-200 p-16 text-center backdrop-blur-lg bg-opacity-50 border-transparent">
                        <p className="text-xl font-semibold text-black mb-4">Contact Us</p>
                        <ul className="text-gray-700 space-y-2">
                            <li>Tel. 70078 19835</li>
                            <li>thepurplestarshop@gmail.com</li>
                            <li>support@thecreatorcloset.com</li>
                            <li>Join Our Affiliate And Earn</li>
                        </ul>
                        <div className="mt-4 space-x-4 flex justify-center">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="#" className="text-pink-600 hover:text-pink-800">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Message */}
            <div className="text-center text-gray-600 mt-8">
                <p>© 2024 by The Purple Star</p>
            </div>
        </footer>
    );
};

export default Footer;
