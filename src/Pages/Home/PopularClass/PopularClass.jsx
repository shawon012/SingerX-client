import React from 'react';
import UseClass from '../../../Hooks/UseClass';
import ClassItem from './ClassItem';

const PopularClass = () => {
    const [classes] = UseClass();
    return (
        <div >
            <div className='mx-auto'>
                <h3 className='text-center font-bold text-6xl font-mono mt-5'>Music Class</h3>
            </div>
            <div className="my-9 grid md:grid-cols-2 gap-10">
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


