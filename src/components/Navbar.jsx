import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-pink-300 p-6 w-[100%]">
            <div className="flex items-center justify-between">
                {/* Left Section: Navigation Links */}
                <div className="flex items-center space-x-8">
                    <Link to="/shop" className="font-thin text-white text-lg hover:text-gray-700 transition duration-300">
                        Shop
                    </Link>
                    <Link to="/notepad" className="font-thin text-white text-lg hover:text-gray-700 transition duration-300">
                        Notepad
                    </Link>
                    <Link to="/sticky-notes" className="font-thin text-white text-lg hover:text-gray-700 transition duration-300">
                        Sticky Notes
                    </Link>
                    <Link to="/planners" className="font-thin text-white text-lg hover:text-gray-700 transition duration-300">
                        Planners
                    </Link>
                    {/* "More" Link with Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <Link className="font-thin text-white text-lg hover:text-gray-700 transition duration-300">
                            More
                        </Link>
                        {isDropdownOpen && (
                            <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-48">
                                <ul className="flex flex-col">
                                    <li><Link to="/notepad" className="block px-4 py-2 hover:bg-gray-100">NotePads</Link></li>
                                    <li><Link to="/sticky-notes" className="block px-4 py-2 hover:bg-gray-100">Sticky Notes</Link></li>
                                    <li><Link to="/shop" className="block px-4 py-2 hover:bg-gray-100">Keychains</Link></li>
                                    <li><Link to="/planners" className="block px-4 py-2 hover:bg-gray-100">Planners</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Center Section: Logo */}
                <div className="text-center">
                    <Link to="/" className="text-white">
                        <p className="text-3xl font-cursive italic">
                            Diaries
                            <span className="font-semibold text-purple-500">store</span>
                        </p>
                    </Link>
                </div>


                {/* Right Section: Search Input, Login, and Cart */}
                <div className="flex items-center space-x-4">
                    {/* Search Input with Icon */}
                    <div className="relative flex items-center rounded-lg w-[300px] bg-white">
                        <span className="absolute left-3 text-gray-500">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* Login Link */}
                    <Link to="/login" className="font-thin text-white text-lg hover:text-gray-700 transition duration-300 flex items-center space-x-1">
                        <RiAccountCircleFill size={24} />
                        <span>Login</span>
                    </Link>

                    {/* Cart Icon */}
                    <Link to="/cart" className="text-white hover:text-gray-700 transition duration-300 flex items-center">
                        <FaShoppingCart size={24} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
