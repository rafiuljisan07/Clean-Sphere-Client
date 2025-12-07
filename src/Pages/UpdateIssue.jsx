import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import Container from '../container/Container';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdateIssue = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [issue, setIssue] = useState([]);
    const [category, setCategory] = useState(issue.category);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/issues/${id}`)
            .then(res => {
                setIssue(res.data)
                setCategory(res.data.category)
            })
            .catch(err => toast.error(err))
    }, [id]);

    const handleUpdate = e => {
        e.preventDefault()
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

        axios.put(`http://localhost:3000/update/${id}`, formData)
            .then(() => {
                form.reset();
                Swal.fire({
                    icon: "success",
                    title: "Issue Updated!",
                    text: "Your issue has been successfully Updated.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/my-issues')
            })
            .catch(err => {
                toast.error(err)
            })
    }
    return (
        <div>
            <Container>
                <form onSubmit={handleUpdate} className="p-6  bg-linear-to-br from-green-200 to-teal-200 backdrop-blur-md rounded-2xl shadow-xl border-2 border-green-200 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">Update Issue</h2>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-gray-500">Created On</div>
                            <div className="mt-1 text-sm font-medium text-gray-700">{issue.date}</div>
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
                                defaultValue={issue.title}
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
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition transform hover:scale-[1.01]"
                                >
                                    <option>Select a category</option>
                                    <option>Garbage</option>
                                    <option>Illegal Construction</option>
                                    <option>Broken Public Property</option>
                                    <option>Road Damage</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-md font-medium mb-1">Location</label>
                            <input
                                defaultValue={issue.location}
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
                            defaultValue={issue.description}
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
                                defaultValue={issue.image}
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
                                    defaultValue={issue.amount}
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
                        <button type="submit" className="btn-sec">Update Issue</button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default UpdateIssue;