import React, { useContext } from 'react';
import Container from '../container/Container';
import { AuthContext } from '../Authentication/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddIssue = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const amount = form.amount.value;
        const email = form.email.value;
        const date = form.date.value;

        const formData = {
            title,
            category,
            location,
            description,
            image,
            amount,
            email,
            date
        };

        axios.post('http://localhost:3000/issues', formData)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Added!",
                    text: "Your Issue has been successfully Added",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            })
            .catch((err) => {
                toast.error(err)
            })



    }
    return (
        <Container>
            <form onSubmit={handleSubmit} className="p-6  bg-linear-to-br from-green-200 to-teal-200 backdrop-blur-md rounded-2xl shadow-xl border-2 border-green-200 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">Report an Issue</h2>
                        <p className="mt-1 text-sm text-gray-500">Share details so we can help the community</p>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-gray-500">Date</div>
                        <div className="mt-1 text-sm font-medium text-gray-700">{new Date().toLocaleString()}</div>
                    </div>
                    <input
                        type="hidden"
                        name="date"
                        value={new Date().toISOString().split("T")[0]}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-md font-medium mb-1">Issue Title</label>
                        <input
                            type="text"
                            name='title'
                            required
                            placeholder="e.g. Broken streetlight"
                            className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-md font-medium mb-1">Category</label>
                        <div>
                            <select
                                name='category'
                                className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition transform hover:scale-[1.01]"
                            >
                                <option>Select Category</option>
                                <option>Garbage</option>
                                <option>Illegal Construction</option>
                                <option>Broken Public Property</option>
                                <option>Road Damage</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">Tap to choose a category.</p>
                    </div>

                    <div>
                        <label className="block text-md font-medium mb-1">Location</label>
                        <input
                            type="text"
                            name='location'
                            required
                            placeholder="Neighborhood, address or landmark"
                            className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-md font-medium text-slate-700 mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            readOnly
                            value={user?.email}
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm focus:outline-none"
                            aria-readonly="true"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-md font-medium mb-1">Description</label>
                    <textarea
                        name='description'
                        required
                        rows="5"
                        placeholder="Add a clear, concise description of the issue..."
                        className="w-full rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-md font-medium mb-1">Image URL</label>
                        <input
                            type="url"
                            name='image'
                            required
                            placeholder="https://"
                            className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        />
                        <p className="mt-1 text-xs text-gray-500">Paste a link to an image or photo of the issue.</p>
                    </div>

                    <div>
                        <label className="block text-md font-medium mb-1">Amount (Suggested Fix Budget)</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <input
                                type="number"
                                name='amount'
                                required
                                placeholder="0.00"
                                className="w-full rounded-xl border border-gray-200 bg-white/60 px-10 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-md font-medium text-slate-700">Status</label>
                            <input type="hidden" name="status" value="ongoing" readOnly />
                        </div>
                        <div className="inline-flex items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full bg-green-200 px-4 py-2 text-sm font-medium text-green-900 shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                ongoing
                            </span>
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <button type="submit" className="btn-sec">Add Issue</button>
                </div>
            </form>
        </Container>
    );
};

export default AddIssue;