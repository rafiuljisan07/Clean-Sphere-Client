import React, { useEffect, useState } from 'react';
import Container from '../container/Container';

const Banner = () => {

    return (
        <Container>
            <div className={`bg-linear-to-r from-green-500 to-cyan-500 py-16 px-4 rounded-lg shadow-lg `}>
                <div className="text-center">
                    <h1 className={`text-4xl font-bold text-white mb-4`}>Clean Sphere</h1>
                    <p className={`text-lg text-gray-100 `}>Your solution for a cleaner environment</p>
                </div>
            </div>
        </Container>
    );
};

export default Banner;