import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/cs-logo.png'
import { AuthContext } from '../Authentication/AuthContext';
import Swal from 'sweetalert2';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <img className='h-7 sm:h-10' src={logo} alt="" />
                    <h1 className='text-xl sm:text-2xl font-bold text-green-700'>Clean<span className='bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent'>Sphere</span></h1>
                </Link>

                {/* Desktop / medium+ nav */}
                <div className='hidden md:flex gap-5 items-center font-medium'>
                    <NavLink to={'/'} className='hover:text-green-800'>Home</NavLink>
                    <NavLink to={'/issues'} className='hover:text-green-800'>All Issues</NavLink>
                    {
                        user ?
                            <div className='flex items-center gap-5 '>
                                <NavLink to={'/add-issue'} className='hover:text-green-800'>Add Issue</NavLink>
                                <NavLink to={'/my-issues'} className='hover:text-green-800'>My Issues</NavLink>
                                <NavLink to={'/my-contribution'} className='hover:text-green-800'>My Contribution</NavLink>
                                <div className="relative">
                                    <img
                                        onClick={() => setOpen(!open)}
                                        src={user?.photoURL || "/default-avatar.png"}
                                        alt="profile"
                                        className="w-10 h-10 rounded-full cursor-pointer border-2 border-white shadow-sm"
                                    />

                                    <div className={`btn-sec absolute right-0 transition-all origin-top mt-2 transform ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} bg-white rounded-md shadow-lg py-2 px-3 z-20`}>
                                        <button
                                            onClick={handleLogout}
                                            className='cursor-pointer text-sm'
                                        >
                                            Logout
                                        </button>
                                    </div>

                                </div>
                            </div>
                            :
                            <>
                                <Link className='btn-pry px-3 py-1 rounded-md' to={'/login'}>Login</Link>
                                <Link className='btn-sec px-3 py-1 rounded-md' to={'/Register'}>Register</Link>
                            </>
                    }
                </div>

                <div className='flex items-center gap-3 md:hidden'>
                    <div className='relative'>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded={menuOpen}
                            aria-label="Open menu"
                            className='p-2 rounded-full text-lg shadow-lg hover:bg-white'
                        >
                            <HiMenu />
                        </button>

                        <div className={`absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all z-30 ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
                            <nav className='flex flex-col divide-y'>
                                <div className='px-3 py-2'>
                                    <NavLink to={'/'} onClick={() => setMenuOpen(false)} className='block px-2 py-2 text-sm hover:bg-green-100 rounded'>Home</NavLink>
                                    <NavLink to={'/issues'} onClick={() => setMenuOpen(false)} className='block px-2 py-2 text-sm hover:bg-green-100 rounded'>All Issues</NavLink>
                                </div>

                                <div className='px-3 py-2'>
                                    {user ? (
                                        <>
                                            <NavLink to={'/add-issue'} onClick={() => setMenuOpen(false)} className='block px-2 py-2 text-sm hover:bg-green-100 rounded'>Add Issue</NavLink>
                                            <NavLink to={'/my-issues'} onClick={() => setMenuOpen(false)} className='block px-2 py-2 text-sm hover:bg-green-100 rounded'>My Issues</NavLink>
                                            <NavLink to={'/my-contribution'} onClick={() => setMenuOpen(false)} className='block px-2 py-2 text-sm hover:bg-green-100 rounded'>My Contribution</NavLink>
                                            <button onClick={() => { setMenuOpen(false); handleLogout(); }} className='w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-red-100 rounded'>Logout</button>
                                        </>
                                    ) : (
                                        <>
                                            <Link to={'/login'} onClick={() => setMenuOpen(false)} className='block px-2 py-2 text-sm hover:bg-green-100 rounded'>Login</Link>
                                            <Link to={'/Register'} onClick={() => setMenuOpen(false)} className='block px-2 py-2 text-sm hover:bg-green-10 rounded'>Register</Link>
                                        </>
                                    )}
                                </div>
                            </nav>
                        </div>
                    </div>
                    {user && (
                        <div className='relative'>
                            <img
                                onClick={() => setOpen(!open)}
                                src={user?.photoURL || null}
                                alt="profile"
                                className="w-9 h-9 rounded-full cursor-pointer shadow-sm"
                            />
                            <div className={`btn-sec absolute right-0 transition-all origin-top mt-2 transform ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} bg-white rounded-md shadow-lg py-2 px-3 z-20`}>
                                <button
                                    onClick={handleLogout}
                                    className='cursor-pointer text-sm'
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;