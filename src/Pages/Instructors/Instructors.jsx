import React from 'react';
import UseIns from '../../Hooks/UseIns';
import InsItem from './InsItem';

const Instructors = () => {
    const [instructors] = UseIns();
    return (
        <div >
            <div className='mx-auto'>
                <h3 className='text-center font-bold text-6xl font-mono mt-5 bg-red-100 pt-5 pb-5'>Superb Instructors</h3>
            </div>
            <div className="my-9 grid md:grid-cols-3 gap-10 py-5 bg-fuchsia-200 hover:bg-orange-200">
                {
                    instructors.map(item => <InsItem
                        key={item._id}
                        item={item}
                    ></InsItem>)
                }
            </div>
        </div>
    );
};

export default Instructors;


