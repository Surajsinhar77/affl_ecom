import React, { useState } from 'react';

const Temp = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Logo</div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                    <li><a href="#" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
            <div id="mobile-menu" className={`md:hidden mt-2 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <ul className="space-y-2">
                    <li><a href="#" className="block text-white">Home</a></li>
                    <li><a href="#" className="block text-white">About</a></li>
                    <li><a href="#" className="block text-white">Services</a></li>
                    <li><a href="#" className="block text-white">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Temp;
