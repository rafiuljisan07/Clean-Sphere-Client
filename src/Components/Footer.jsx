import React from 'react';
import logo from '../assets/cs-logo.png';
import { Link } from 'react-router';
import { FaFacebook, FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-black py-10'>
            <section className='w-11/12 mx-auto flex justify-between items-center'>
                <div>
                    <div>
                        <Link to={'/'} className='flex items-center gap-2'>
                            <img className='h-10' src={logo} alt="" />
                            <div>
                                <h1 className='text-3xl font-bold text-green-900'>Clean<span className='bg-linear-to-r from-green-700 to-green-400 bg-clip-text text-transparent'>Sphere</span></h1>
                                <p className='text-sm font-medium text-green-900'>Report & Resolve</p>
                            </div>
                        </Link>
                        <p className='text-gray-300 w-1/2 mt-4'>Connecting communities through actionable insights — report, track, and resolve local issues for a cleaner, smarter environment.</p>
                    </div>
                </div>
                <div className='text-white text-3xl flex gap-4 w-1/2 justify-center'>
                    <a href="https://www.facebook.com/rafiulislam.jisan.1" target='_blank'> <FaFacebookSquare />
                    </a>
                    <a href="https://www.linkedin.com/in/rafiul-islam-jisan-99ba26332/" target='_blank'><FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/rafiulislam.jisan.1" target='_blank'>  <FaSquareXTwitter />
                    </a>
                    <a href="https://github.com/rafiuljisan07" target='_blank'>  <FaGithubSquare />
                    </a>

                    
                   

                </div>
            </section>
            <section>
                <p className='text-sm text-gray-300 text-center mt-5'>Copyright © 2025 - All right reserved by CleanSphere</p>
            </section>

        </div>
    );
};

export default Footer;