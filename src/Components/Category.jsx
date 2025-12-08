import React from 'react';
import Container from '../container/Container';
import { Link } from 'react-router';

const Category = () => {
    const category = ['Garbage',
        'Illegal Construction',
        'Broken Public Property',
        'Road Damage',]
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {category.map((label) => (
                    <div
                        key={label}
                        className="p-4 border-2 border-green-600 rounded-xl bg-linear-to-br from-green-200 via-green-300 to-teal-300 shadow-xl text-center"
                    >
                        <h3 className="mb-3 text-lg font-semibold">{label}</h3>
                        <Link to={`/category/${label}`}
                            className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform-gpu transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Category;