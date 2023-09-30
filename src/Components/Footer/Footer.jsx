import React from 'react';

function Footer() {
    return (
        <div className="flex flex-col max-h-screen">
            <div className="flex-grow">
                {/* Your main content goes here */}
            </div>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto flex justify-center text-center">
                    <div className="w-1/3 p-4">
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p>123 Main Street, Cityville</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>

                <div className="container mx-auto flex justify-center mt-4">
                    <a href="#" className="mx-4">About Us</a>
                    <a href="#" className="mx-4">Contact Us</a>
                    <a href="#" className="mx-4">FAQs</a>
                    <a href="#" className="mx-4">Terms and Conditions</a>
                    <a href="#" className="mx-4">Privacy Policy</a>
                    <a href="#" className="mx-4">Shipping Information</a>
                    <a href="#" className="mx-4">Returns and Exchanges</a>
                    <a href="#" className="mx-4">Payment Methods</a>
                    <a href="#" className="mx-4">Size Guide</a>
                    <a href="#" className="mx-4">Blog</a>
                </div>

                <div className="container mx-auto flex justify-center mt-4">
                    <a href="#" className="mx-4">Facebook</a>
                    <a href="#" className="mx-4">Twitter</a>
                    <a href="#" className="mx-4">Instagram</a>
                </div>

                {/* <div className="container mx-auto flex justify-center mt-4">
                    <input type="email" className="border p-2 rounded mr-2" placeholder="Enter your email" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
                </div> */}

                <div className="container mx-auto text-center mt-4">
                    <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
