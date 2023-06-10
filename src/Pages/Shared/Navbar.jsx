import React from 'react';
import guitar from '../../../public/guitar.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Instructors</a>
                            </li>
                            <li><a>Classes</a></li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                    <div><img className='h-6 w-full' src={guitar} alt="" /></div>
                    <a className="btn btn-ghost normal-case text-xl">SingerX</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul tabIndex={0} className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li> <a>Instructors</a> </li>
                        <li><a>Classes</a></li>
                        <li><a>Dashboard</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <div>
                            <img src='' alt="" />
                        </div>
                        <div>
                            <button>Logout</button>
                        </div>
                    </div>
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;