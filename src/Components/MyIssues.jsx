import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { toast } from 'react-toastify';
import Container from '../container/Container';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyIssues = () => {
    const [myIssues, setMyIssues] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/my-issues?email=${user?.email}`)
            .then(res => setMyIssues(res.data))
            .catch(err => toast.error(err))
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Confirm Delete?",
            text: "This item will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonColor: "#d33"
        }).then((result) => {
            if (result.isConfirmed) {
                // API CALL
                axios.delete(`http://localhost:3000/delete/${id}`)
                    .then(() => {
                        const filteredIssues = myIssues.filter(issue => issue._id !== id);
                        setMyIssues(filteredIssues)
                        Swal.fire({
                            icon: "success",
                            title: "Deleted!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(err => {

                    })
            }
        });
    }

    return (
        <Container>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">My Issues</h1>

                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left">Photo</th>
                                <th className="px-6 py-3 text-left">Title</th>
                                <th className="px-6 py-3 text-left">Category</th>
                                <th className="px-6 py-3 text-left">Amount</th>
                                <th className="px-6 py-3 text-left">Status</th>
                                <th className="px-6 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myIssues?.map((issue) => (
                                <tr key={issue?._id} className="border-b border-green-600 hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <img src={issue?.image || null} alt="issue" className="w-12 h-12 rounded-full object-cover" />
                                    </td>
                                    <td className="px-6 py-4 text-lg font-semibold text-gray-900">{issue?.title}</td>
                                    <td className="px-6 py-4 text-gray-700">{issue.category}</td>
                                    <td className="px-6 py-4 text-gray-700">${issue.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${issue.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-300 text-green-800'
                                            }`}>
                                            {issue.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <Link to={`/my-issues/update/${issue?._id}`}>
                                            <button className="btn btn-accent rounded-lg">
                                                Update
                                            </button>
                                        </Link>
                                        <button
                                            className="btn btn-error rounded-lg"
                                            onClick={() => { handleDelete(issue?._id) }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {myIssues.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No issues found</p>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default MyIssues;
<div className="mt-8"></div>