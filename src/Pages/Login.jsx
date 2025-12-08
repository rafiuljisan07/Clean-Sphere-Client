import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaRegArrowAltCircleRight, FaUserLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser, signInWithGoogle } = use(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(() => {
                e.target.reset();
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                });
                navigate(location.state || '/')
            })
            .catch(err => {
                if (err.code === 'auth/wrong-password') {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed!",
                        text: "🚫 Incorrect password. Try again."
                    });
                }
                else if (err.code === "auth/invalid-credential")
                    Swal.fire({
                        icon: "error",
                        title: "Login failed!",
                        text: "⚠️ Invalid credentials. Please check your email and password."
                    });
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed!",
                        text: err.message
                    });
                }
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location.state || '/')
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                });
            })
            .catch()
    }
    return (
        <div className='flex justify-center items-center h-screen-80'>
             <title>Clean Sphere | Login</title>
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:flex flex-col items-start justify-center gap-4 p-8 bg-linear-to-br from-green-600 to-teal-600">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Welcome Back</h2>
                    <p className="text-gray-100 max-w-xs">
                        Sign in to report new issues, track cleanup progress, and help keep our community clean.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <span className="w-10 h-10 rounded-full bg-white/20" />
                        <span className="w-10 h-10 rounded-full bg-white/10" />
                        <span className="w-10 h-10 rounded-full bg-white/5" />
                    </div>
                </div>

                <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sign in to your account</h3>
                    <p className="text-sm text-gray-500 mb-6">Use your email and password or continue with Google</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Email</span>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-4.5 text-gray-400">
                                    <FaRegArrowAltCircleRight />
                                </span>
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
                                />
                            </div>
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Password</span>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-4.5 text-gray-400">
                                    <FaUserLock />
                                </span>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name='password'
                                    required
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
                                />
                                <button className='absolute right-4 top-4 text-xl'
                                    type='button' onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </label>

                        <button type="submit" className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-800"
                        >
                            Sign in
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-sm text-gray-400">or</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        <button onClick={handleGoogleLogin} type="button" className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border-2 border-gray-200 hover:shadow-sm transition"
                        >
                            <span> <FcGoogle /> </span>
                            <span className=" font-medium text-gray-700">Continue with Google</span>
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?
                        <Link to={'/register'} className="ml-2 text-blue-600 font-medium hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;