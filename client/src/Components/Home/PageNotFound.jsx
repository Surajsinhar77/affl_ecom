// NotFound.js
import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h2 className="text-6xl font-bold text-gray-800">404</h2>
                <p className="mt-4 text-xl text-gray-600">
                    Oops! The page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
};

export default PageNotFound;
