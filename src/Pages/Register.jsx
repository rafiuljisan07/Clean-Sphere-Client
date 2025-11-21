import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex items-start justify-center py-12 bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Create an account</h2>

                <form className="space-y-4">
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700 mb-1 block">Name</span>
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-gray-700 mb-1 block">Email</span>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-gray-700 mb-1 block">Photo URL</span>
                        <input
                            name="photoURL"
                            type="url"
                            placeholder="https://..."
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-gray-700 mb-1 block">Password</span>
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Create a password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </label>

                    <button
                        type="button"
                        className="w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center my-3 text-sm text-gray-500">or</div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                    <FcGoogle />
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to={'/login'} className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;