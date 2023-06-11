import React from 'react';

const Customerfeedback = () => {
    return (
        <div className='bg-teal-100 hover:bg-purple-100'>
            <div>
                <h3 className="text-center text-7xl  pt-8 pb-8 hover:text-red-600">Student Review</h3>
            </div>
            <div className="hero  bg-base-200 hover:bg-red-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="max-w-sm h-52 rounded-lg shadow-2xl" />
                    <div className='hover:text-amber-600'>
                        <h1 className="text-5xl ">My Dream School!</h1>
                        <p className="py-6">I learned many thing from this school. This is my dream school!</p>
                        <p className='text-2xl'>-Sarah</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 hover:bg-fuchsia-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src="https://images.unsplash.com/photo-1527284007122-cd75f33493b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYXJ0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="max-w-sm h-52 rounded-lg shadow-2xl" />
                    <div className='hover:text-teal-700'>
                        <h1 className="text-5xl">Supportive Instructors!</h1>
                        <p className="py-6">Instructor here are very much supportive. They helped me a lot during learning!</p>
                        <p className='text-2xl'>Julie-</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customerfeedback;