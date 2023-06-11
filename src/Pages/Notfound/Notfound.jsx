import React from 'react';
import { Link } from 'react-router-dom';
const Notfound = () => {
    return (
        <div className='flex justify-around p-36 text-center'>
            <div className='w-3/5 h-96'>
                <img className='w-full h-full' src="https://images.unsplash.com/photo-1650692201357-3b1b15469952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NDA0JTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
           <div className='flex items-center'>
           <div>
                <Link to='/'><button className='btn btn-primary'>Back to Home</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Notfound;