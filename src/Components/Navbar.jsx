import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/cs-logo.png'

const Navbar = () => {
    return (
        <div className='bg-green-50 shadow-sm'>
            <div className='flex justify-between items-center max-w-11/12 mx-auto py-2'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img className='h-10' src={logo} alt="" />
                    <h1 className='text-3xl font-bold text-green-900'>Clean<span className='bg-linear-to-r from-green-700 to-green-400 bg-clip-text text-transparent'>Sphere</span></h1>
                </Link>
                <div className='space-x-5'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/issues'}>Issues</NavLink>
                    <Link className='btn-pry' to={'/login'}>Login</Link>
                    <Link className='btn-sec' to={'/Register'}>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;