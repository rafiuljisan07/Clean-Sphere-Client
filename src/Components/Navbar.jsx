import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/cs-logo.png'
import { AuthContext } from '../Authentication/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged out successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                });
                setOpen(false)
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Logout failed!",
                    text: "Please try again."
                });

            })
    }
    return (
        <div className='bg-green-50 shadow-sm'>
            <div className='flex justify-between items-center max-w-11/12 mx-auto py-2'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img className='h-10' src={logo} alt="" />
                    <h1 className='text-3xl font-bold text-green-700'>Clean<span className='bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent'>Sphere</span></h1>
                </Link>
                <div className='flex gap-5 items-center font-medium'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/issues'}>Issues</NavLink>
                    {
                        user ?
                            <div className='flex items-center gap-5 '>
                                <NavLink to={'/add-issue'} >Add Issue</NavLink>
                                <NavLink to={'/my-issues'} >My Issues</NavLink>
                                <NavLink to={'/my-contribution'} >My Contribution</NavLink>
                                <div className="relative">
                                    <img
                                        onClick={() => setOpen(!open)}
                                        src={user?.photoURL || "/default-avatar.png"}
                                        alt="profile"
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                    />

                                    <div className={`btn-sec absolute right-0 transition-all duration-300 transform ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} origin-top mt-2`}>
                                        <button
                                            onClick={handleLogout}
                                            className='cursor-pointer'
                                        >
                                            Logout
                                        </button>
                                    </div>

                                </div>
                            </div>
                            :
                            <>
                                <Link className='btn-pry' to={'/login'}>Login</Link>
                                <Link className='btn-sec' to={'/Register'}>Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;