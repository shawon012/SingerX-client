import React, { useContext } from 'react';
import guitar from '../../../public/guitar.png'
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div >
            <div className="navbar bg-orange-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'> <li><a>Home</a></li></Link>
                            <Link to='/instructors'> <li><a>Instructors</a></li></Link>
                            <Link to='/classes'><li><a>Classes</a></li></Link>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                    <div><img className='h-6 w-full' src={guitar} alt="" /></div>
                    <a className="btn btn-ghost normal-case text-xl">SingerX</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul tabIndex={0} className="menu menu-horizontal px-1">
                        <Link to='/'> <li><a>Home</a></li></Link>
                        <Link to='/instructors'> <li><a>Instructors</a></li></Link>
                        <Link to='/classes'><li><a>Classes</a></li></Link>
                        <li><a>Dashboard</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            (<div className='flex gap-3'>
                                <div className="w-12 h-12 avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img className='rounded-full border-spacing-1 border-slate-400' src={user.photoURL} />
                                </div>
                                <div><button onClick={handleLogOut} className='btn btn-info'>Logout</button></div>
                            </div>) :
                            <Link to='login'> <a className="btn btn-neutral">Login</a></Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;