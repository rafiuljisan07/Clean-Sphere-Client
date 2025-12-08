import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import Container from '../container/Container';
import { AuthContext } from '../Authentication/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const IssueDetails = () => {
    const { user } = useContext(AuthContext)
    const issue = useLoaderData();
    const { title, category, location, description, image, amount, date } = issue;
    const [showModal, setShowModal] = useState(false);

    const handlePayment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const amount = form.amount.value;
        const contributorName = form.contributorName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const date = form.date.value;
        const info = form.info.value;

        const formData = {
            title,
            amount,
            contributorName,
            email,
            phone,
            address,
            date,
            info,
        }

        axios.post('http://localhost:3000/contributions', formData)
            .then(() => {
                form.reset();
                setShowModal(false);
                Swal.fire({
                    title: "✔ PAYMENT RECEIVED",
                    text: "Thank you! Your payment has been recorded.",
                    icon: "success",
                    confirmButtonText: "Done"
                });
            })
            .catch(err => {
                console.log(err);

            })


    }

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
                        <button onClick={() => setShowModal(true)} className='btn-sec'>Pay Clean-Up Contribution</button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full">
                        <div className="bg-linear-to-r from-green-500 to-teal-500 p-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">Contribution Form</h2>
                            <button onClick={() => setShowModal(false)} className="text-white text-2xl hover:opacity-80 cursor-pointer">✕</button>
                        </div>

                        <form onSubmit={handlePayment} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Issue Title</label>
                                <input
                                    type="text"
                                    name='title'
                                    value={title}
                                    disabled
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
                                    <input
                                        type="number"
                                        name='amount'
                                        value={amount}
                                        disabled
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                                    <input
                                        type="text"
                                        name='date'
                                        value={new Date().toISOString().split("T")[0]}
                                        disabled
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Contributor Name</label>
                                <input
                                    type="text"
                                    name='contributorName'
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name='email'
                                        value={user?.email}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name='phone'
                                        required
                                        placeholder="+880 (555) 000-0000"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    name='address'
                                    required
                                    placeholder="Enter your address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Info</label>
                                <textarea
                                    placeholder="Any additional information..."
                                    name='info'
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"></textarea>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50">Cancel</button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-linear-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg">Submit Contribution</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default IssueDetails;