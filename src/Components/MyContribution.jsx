import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import axios from 'axios';
import Container from '../container/Container';

const MyContribution = () => {
    const { user } = useContext(AuthContext)
    const [contributions, setContributions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/my-contributions?email=${user?.email}`)
            .then(res => setContributions(res.data))
            .catch(() => {

            })
    }, [user?.email]);

    console.log(contributions);
    

    return (
        <Container>
            <div className="w-full">
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full text-left">
                        <thead className="bg-linear-to-r from-green-500 to-teal-500">
                            <tr>
                                <th className="px-6 py-3 text-md font-medium  uppercase tracking-wider">Issue Title</th>
                                <th className="px-6 py-3 text-md font-medium  uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-md font-medium  uppercase tracking-wider">Paid Amount</th>
                                <th className="px-6 py-3 text-md font-medium  uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-md font-medium  uppercase tracking-wider">Download report</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {contributions.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center font-semibold text-gray-700">
                                        No contributions found.
                                    </td>
                                </tr>
                            ) : (
                                contributions.map((con) => (
                                    <tr key={con._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 align-top">
                                            <div className="font-semibold text-gray-900 truncate max-w-xs">{con.title ?? '—'}</div>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            <div className="text-sm text-gray-700">{con.category ?? '—'}</div>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            <div className="text-sm text-gray-900">{con.amount} </div>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            <div className="text-sm text-gray-700">{con.date}</div>
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                               <button className='btn btn-accent'>Download</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
};

export default MyContribution;