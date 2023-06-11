import React from 'react';
import UseClass from '../../../Hooks/UseClass';
import ClassItem from './ClassItem';

const PopularClass = () => {
    const [classes] = UseClass();
    return (
        <div >
            <div className='mx-auto'>
                <h3 className='text-center font-bold text-6xl font-mono mt-5 bg-cyan-200 py-5'> Awesome Music Classes</h3>
            </div>
            <div className="my-9 py-6 grid md:grid-cols-3 gap-10 bg-purple-200 hover:bg-indigo-200">
                {
                    classes.map(item => <ClassItem
                        key={item._id}
                        item={item}
                    ></ClassItem>)
                }
            </div>
        </div>
    );
};

export default PopularClass;


