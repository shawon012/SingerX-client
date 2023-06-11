import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useCart from '../../../Hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClassItem = ({ item }) => {
    const {_id, image, name, instructorName, availableSeats, totalSeats, price, enrolledStudents } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {cartItemId: _id, name, instructorName, image, price, email: user.email}
            fetch('https://fproserver.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to enroll',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

   
    return (
        <div className={`mx-auto ${availableSeats === 0 ? 'bg-red-500' : 'bg-base-100'
            }`}>
            <div className='mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}!</h2>
                        <p>Instructor Name: {instructorName}</p>
                        <p>Available Seats: {availableSeats}</p>
                        <p>Price: {price}</p>
                        <div className="card-actions justify-end">
                            <button  onClick={() => handleSelect(item)}
                                disabled={availableSeats === 0 || user?.role === 'admin' || user?.role === 'instructor'} className="btn btn-primary">Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ClassItem;