import React from 'react';

const IssueCard = ({ issue }) => {
    const { title, category, image, location, amount, date } = issue;
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform ease-in-out hover:scale-102 duration-300">
            <div className="relative h-48 bg-gray-100">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    {category}
                </span>
                <div className="absolute bottom-3 left-3 bg-black/40 text-white text-sm px-3 py-1 rounded-full">
                    ${amount}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="w-fit mt-1 bg-black/20 text-gray-800 text-xs px-2 py-1 rounded-lg">
                    {location}
                </p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{date}</span>
                    <button
                        className="btn-sec"
                        aria-label={`See details for ${title}`}
                    >
                        See details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssueCard;