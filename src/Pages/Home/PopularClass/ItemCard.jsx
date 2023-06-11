import React from 'react';

const ItemCard = ({ item }) => {
    const {_id, classphotoUrl, className, email, instructorName, status, availabeseats, totalseats, price, enrolledStudents } = item;
    return (
        <div>
            <div className='mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={classphotoUrl} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{className}</h2>
                        <p>Instructor Name: {instructorName}</p>
                        <p>Available Seats: {availabeseats}</p>
                        <p>Status: {status}</p>
                        <p>Price: {price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;