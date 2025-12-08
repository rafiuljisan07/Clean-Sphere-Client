import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <title>Clean Sphere | 404 error</title>
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4">Page Not Found</p>
            <Link to="/" className="mt-6 text-blue-600 ">Go Home</Link>
        </div>
    );
};

export default Error;