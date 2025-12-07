import React from 'react';
import { useLoaderData } from 'react-router';
import Container from '../container/Container';

const IssueDetails = () => {
    const data = useLoaderData();
    const { title, category, location, description, image, amount, date } = data;

    return (
        <Container>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden">
                <div className="md:w-1/2">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-80 md:h-full object-cover"
                    />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between md:w-1/2 bg-linear-to-br from-green-200 to-teal-200">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{title}</h1>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full">{category}</span>
                            <span className="text-sm px-3 py-1 bg-green-50 text-green-700 rounded-full">{location}</span>
                            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{date}</span>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <div className="text-sm text-gray-500">Suggested Fix Budget</div>
                            <div className="text-2xl font-semibold text-gray-900">
                                {amount} <span>$</span>
                            </div>
                        </div>
                        <button
                            className='btn-sec'
                        >
                            Pay Clean-Up Contribution
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default IssueDetails;