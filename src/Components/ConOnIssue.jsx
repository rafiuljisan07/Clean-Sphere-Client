import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const ConOnIssue = ({ issue }) => {
    const [contributions, setContributions] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get(`https://clean-sphere-server.vercel.app/contributions?issueId=${issue?._id}`)
            .then(res => {
                setContributions(res.data)
                setLoading(false)
            })
            .catch(() => { })
    }, [issue?._id])

    if (loading) return <Loading />


    return (
        <div className="max-w-4xl mx-auto overflow-x-auto mt-12">
            <div className="bg-linear-to-r from-green-200 to-teal-200 shadow-md rounded-lg">
                <div className="px-4 py-3 flex items-center justify-between border-b border-b-black">
                    <h3 className="text-2xl font-semibold text-gray-800">Contributors</h3>
                    <span className="text-md">total {contributions.length}</span>
                </div>

                {contributions.length === 0 ? (
                    <div className="p-4 text-center text-xl font-semibold">No contributions yet.</div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-400  rounded-lg">
                        <thead className="bg-green-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                    Contributor
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contributions.map((c) => (
                                <tr key={c._id} className="hover:bg-gray-50  border-b border-gray-200">
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                                        {c.contributorName ?? '—'}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        {c.email ?? '—'}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-800 font-medium">{c.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ConOnIssue;