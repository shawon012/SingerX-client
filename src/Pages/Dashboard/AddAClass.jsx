import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const handleAddAClass = event => {
        event.preventDefault();

        const form = event.target;
        const className = form.className.value;
        const instructorName = form.instructorName.value;
        const email = user?.email;
        const classphotoUrl = form.photoUrl.value;
        const status = form.status.value;
        const price = form.price.value;
        const totalseats = form.totalseats.value;
        const availabeseats = form.availabeseats.value;
        // const details = form.details.value;
        const myClass = {
            price: price,
            classphotoUrl: classphotoUrl,
            className: className,
            instructorName: instructorName,
            email: email,
            status: status,
            totalseats : totalseats,
            availabeseats : availabeseats
        }

        console.log(myClass);

        fetch('https://fproserver.vercel.app/insClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('class added successfully')
                }
            })

    }
    return (
        <div className='bg-red-100 hover:bg-green-100'>
            <form onSubmit={handleAddAClass}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ms-11 mr-11 pt-11'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name" name='className' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Instructor Name" name='instructorName' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        < input type="text" placeholder="Email" name='email' defaultValue={user?.email} className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Class Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photoUrl' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <select name="status" className="input input-bordered input-secondary w-full">
                            <option value="">Select Sub Category</option>
                            <option value="pending">pending</option>
                        </select>
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name='price' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Total Seat</span>
                        </label>
                        <input type="text" placeholder="totalseats" name='totalseats' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full mb-4  ">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" placeholder="Available Seats" name='availabeseats' className="input input-bordered input-secondary w-full " />
                    </div>
                </div>
                <div className='text-center pb-11'>
                    <button className='btn btn-outline px-7' type='submit'>Add Class</button>
                </div>
            </form>
        </div>
    );
};

export default AddAClass;