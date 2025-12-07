import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, signInWithGoogle, updateUserProfile } = use(AuthContext);
    const [passErr, setPassErr] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        const regEX = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regEX.test(password)) {
            setPassErr('Password must have at least 1 uppercase, 1 lowercase and be 6+ characters.')
            return
        };
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL).then().catch(err => alert(err.code));
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                });
                navigate(location.state || '/');
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        icon: "error",
                        title: "Registration failed!",
                        text: '❌ This email is already registered. Please log in instead.'
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Registration failed!",
                        text: '❗Something went wrong. Please try again.'
                    });
                }
            })
    };

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location.state || '/')
            })
            .catch(err => alert(err.code))

    };
    return (
        <div className="flex justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Create an account</h2>

                <form onSubmit={handleSignUp} className="space-y-4">
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

                    <label className="block relative">
                        <span className="text-sm font-medium text-gray-700 mb-1 block">Password</span>
                        <input
                            name="password"
                            type={showPass ? 'text' : 'password'}
                            required
                            placeholder="Create a password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className='absolute right-4 top-8 text-xl'
                            type='button' onClick={() => setShowPass(!showPass)}>
                            {showPass ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </label>
                    {
                        passErr && <p className='text-red-500'>Password must have at least 1 uppercase, 1 lowercase and be 6+ characters.</p>
                    }
                    <button
                        type="submit"
                        className="w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center my-3 text-sm text-gray-500">or</div>

                <button
                    onClick={handleGoogleSignUp}
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